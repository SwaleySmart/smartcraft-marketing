# Testing Strategy

## Testing Pyramid
```
        E2E Tests
       /         \
      Integration Tests  
     /            \
   Frontend Unit  Backend Unit
```

## Test Organization

### Frontend Tests
```
tests/js/
├── components/           # Component unit tests
├── pages/               # Page component tests
├── composables/         # Composable function tests
└── utils/               # Utility function tests
```

### Backend Tests
```
tests/
├── Feature/             # HTTP and integration tests
├── Unit/                # Business logic unit tests
└── Browser/             # Laravel Dusk tests (if needed)
```

### E2E Tests
```
e2e/
├── specs/               # Test specifications
├── fixtures/            # Test data
└── support/             # Test utilities
```

## Test Examples

### Frontend Component Test
```typescript
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HeroBlock from '@/Components/Blocks/HeroBlock.vue'

describe('HeroBlock', () => {
  it('renders hero content correctly', () => {
    const wrapper = mount(HeroBlock, {
      props: {
        data: {
          title: 'Test Title',
          subtitle: 'Test Subtitle',
          cta_text: 'Get Started'
        }
      }
    })
    
    expect(wrapper.find('h1').text()).toBe('Test Title')
    expect(wrapper.find('p').text()).toBe('Test Subtitle')
    expect(wrapper.find('button').text()).toBe('Get Started')
  })
})
```

### Backend API Test
```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ContactFormTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_contact_form_submission_creates_entry(): void
    {
        $formData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'message' => 'Test message'
        ];
        
        $response = $this->post('/contact', $formData);
        
        $response->assertRedirect()
                 ->assertSessionHas('success');
                 
        $this->assertDatabaseHas('form_submissions', [
            'form' => 'contact',
            'data->email' => 'john@example.com'
        ]);
    }
}
```

### E2E Test
```typescript
import { test, expect } from '@playwright/test'

test('homepage loads and displays key elements', async ({ page }) => {
  await page.goto('/')
  
  // Check hero section
  await expect(page.locator('h1')).toContainText('The anti-agency')
  
  // Check packages section
  await expect(page.locator('[data-testid="packages"]')).toBeVisible()
  
  // Test contact form
  await page.fill('[data-testid="contact-name"]', 'Test User')
  await page.fill('[data-testid="contact-email"]', 'test@example.com')
  await page.fill('[data-testid="contact-message"]', 'Test message')
  
  await page.click('[data-testid="contact-submit"]')
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible()
})
```