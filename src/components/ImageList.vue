<template>
  <div class="image-list-container">
    <div
      class="small-image-wrapper"
      :class="activeId === item.node.id && 'active'"
      v-for="item in items"
      :id="item.node.id"
      :key="item.node.id"
      @click="selectItem(item.node.id)"
    >
      <img :src="item.node.small" alt="small" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { ProductListItem } from "@/types";

export default defineComponent({
  name: "ImageList",
  components: {},
  props: {
    items: { type: Array as PropType<ProductListItem[]>, required: true },
    selectItem: { type: Function, required: true },
    activeId: { type: String, required: true },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
});
</script>

<style lang="scss">
.image-list-container {
  .small-image-wrapper {
    border: 1px solid #eee;
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
    cursor: pointer;

    img {
      height: 100%;
      width: auto;
    }

    &.active {
      outline: 2px solid #000000;
    }
  }

  @media screen and (max-width: 1400px) {
    display: flex;
    flex-wrap: wrap;

    .small-image-wrapper {
      margin-right: 20px;
    }
  }
}
</style>
