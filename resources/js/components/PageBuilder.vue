<template>
  <div class="page-builder">
    <!-- Render each block -->
    <component
      v-for="(block, index) in blocks"
      :key="`${block.type}-${index}`"
      :is="getBlockComponent(block.type)"
      v-bind="block.data"
      :block-index="index"
      @block-event="handleBlockEvent"
    />
  </div>
</template>

<script setup>
import { h } from 'vue'
import HeroBlock from '@/components/blocks/HeroBlock.vue'
import PackagesBlock from '@/components/blocks/PackagesBlock.vue'
import SmartProcessBlock from '@/components/blocks/SmartProcessBlock.vue'

// Create a fallback component for missing blocks
const FallbackBlock = {
  props: ['blockIndex', 'type'],
  setup(props) {
    return () => h('div', {
      class: 'bg-yellow-100 border-2 border-yellow-400 rounded-lg p-8 m-4 text-center'
    }, [
      h('h3', { class: 'text-lg font-semibold text-yellow-800 mb-2' }, 
        `Block "${props.type}" not implemented yet`
      ),
      h('p', { class: 'text-yellow-700' }, 
        'This block will be rendered once the component is created.'
      )
    ])
  }
}

// Available block components (using static imports for better production reliability)
const blockComponents = {
  hero: HeroBlock,
  packages: PackagesBlock,
  smart_process: SmartProcessBlock,
  // Other components will be added as they're created
  comparison: FallbackBlock,
  anti_wp: FallbackBlock,
  devops: FallbackBlock,
  analytics: FallbackBlock,
  case_studies: FallbackBlock,
  contact: FallbackBlock,
}

const props = defineProps({
  blocks: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['block-event'])

const getBlockComponent = (blockType) => {
  const component = blockComponents[blockType]
  if (!component) {
    console.warn(`Block component not found for type: ${blockType}`)
    // Return fallback component for unknown block types
    return {
      props: ['blockIndex'],
      setup(props) {
        return () => h(FallbackBlock, { 
          type: blockType, 
          blockIndex: props.blockIndex 
        })
      }
    }
  }
  
  // If component is FallbackBlock, pass the block type
  if (component === FallbackBlock) {
    return {
      props: ['blockIndex'],
      setup(props) {
        return () => h(FallbackBlock, { 
          type: blockType, 
          blockIndex: props.blockIndex 
        })
      }
    }
  }
  
  return component
}

const handleBlockEvent = (event) => {
  // Forward block events to parent components
  emit('block-event', event)
}
</script>

<style scoped>
.page-builder {
  min-height: 100vh;
}
</style>
