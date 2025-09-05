<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Nav;
use Statamic\Facades\GlobalSet;

class PageController extends Controller
{
    public function index()
    {
        // Redirect to the show method for the home page
        return $this->show(request(), '/');
    }

    public function show(Request $request, $uri = '/')
    {
        // Find entry by URI
        $page = Entry::findByUri($uri);

        if (!$page) {
            abort(404);
        }

        // If it's a tree page, get the actual entry
        $entry = $page instanceof \Statamic\Structures\Page ? $page->entry() : $page;
        
        if (!$entry) {
            abort(404);
        }

        // Determine Vue component based on entry template or collection
        $component = $this->getComponentName($entry);

        // Process blocks data if it exists
        $blocks = $this->processBlocks($entry->get('blocks', []));

        // Get global data for header/footer
        $globalData = $this->getGlobalData();

        // Sanitize entry data - only pass what's needed for frontend
        $entryData = [
            'id' => $entry->id(),
            'title' => $entry->get('title'),
            'slug' => $entry->slug(),
            'uri' => $entry->uri(),
            'url' => $entry->url(),
            'permalink' => $entry->absoluteUrl(),
            'data' => array_merge(
                // Only pass safe fields from entry data
                collect($entry->data()->all())->except([
                    'updated_by', 'updated_at', 'created_by', 'created_at'
                ])->all(), 
                ['blocks' => $blocks]
            ),
            // Only include safe augmented fields
            'meta_title' => $entry->get('meta_title'),
            'meta_description' => $entry->get('meta_description'),
            'og_image' => $entry->get('og_image'),
            'canonical_url' => $entry->get('canonical_url'),
            'robots' => $entry->get('robots'),
            'collection' => $entry->collectionHandle(),
            'template' => $entry->template(),
            'published' => $entry->published(),
            'status' => $entry->status(),
        ];

        return Inertia::render($component, array_merge([
            'entry' => $entryData,
            'collection' => $entry->collectionHandle(),
            'template' => $entry->template(),
        ], $globalData));
    }

    private function getComponentName($entry): string
    {
        // For pages collection, always use Page component (generic page builder)
        $collection = $entry->collectionHandle();
        
        if ($collection === 'pages') {
            return 'Page';
        }
        
        // Use template name if available for other collections
        if ($template = $entry->template()) {
            return 'Templates/' . ucfirst($template);
        }

        // Fall back to collection-based component
        return match ($collection) {
            'posts' => 'Post',
            default => 'Page'
        };
    }

    private function processBlocks($blocks): array
    {
        if (!is_array($blocks)) {
            return [];
        }

        $processedBlocks = [];
        
        foreach ($blocks as $block) {
            // Skip disabled blocks
            if (isset($block['enabled']) && !$block['enabled']) {
                continue;
            }

            // Ensure block has required structure
            if (!isset($block['type'])) {
                continue;
            }

            // Process the block data
            $blockData = $block;
            unset($blockData['type'], $blockData['enabled']);

            $processedBlocks[] = [
                'type' => $block['type'],
                'data' => $blockData
            ];
        }

        return $processedBlocks;
    }

    private function getGlobalData(): array
    {
        $globalData = [];

        // Get navigation using proper Statamic API
        $navigation = Nav::find('main_nav');
        if ($navigation) {
            $tree = $navigation->in('default');
            if ($tree) {
                $globalData['navigation'] = $tree->tree();
            }
        }

        // Get header global data
        $headerGlobal = GlobalSet::findByHandle('header');
        if ($headerGlobal) {
            $headerData = $headerGlobal->inCurrentSite()->data()->all();
            $globalData['header'] = $headerData;
        }

        // Get footer global data
        $footerGlobal = GlobalSet::findByHandle('footer');
        if ($footerGlobal) {
            $footerData = $footerGlobal->inCurrentSite()->data()->all();
            $globalData['footer'] = $footerData;
        }

        // Get SEO global data
        $seoGlobal = GlobalSet::findByHandle('seo');
        if ($seoGlobal) {
            $seoData = $seoGlobal->inCurrentSite()->data()->all();
            $globalData['seo'] = $seoData;
        }

        return $globalData;
    }

}
