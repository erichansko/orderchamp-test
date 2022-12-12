<template>
  <div class="image-view-port-container">
    <div
      class="view-port"
      v-for="(item, index) in items"
      :id="item.node.id"
      :key="index"
      :style="index === 0 && { marginLeft: `-${activeIndex * 100}%` }"
    >
      <img :src="item.node.big" :alt="item.node.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ProductListItem } from "@/types";

export default defineComponent({
  name: "ImageViewPort",
  components: {},
  props: {
    items: { type: Array as PropType<ProductListItem[]>, required: true },
    activeId: { type: String, required: true },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  watch: {
    activeId(newActiveId) {
      this.activeIndex = this.items.findIndex(
        (item) => item.node.id === newActiveId
      );
    },
  },
  methods: {},
});
</script>

<style lang="scss">
.image-view-port-container {
  display: flex;
  border: 1px solid #ccc;
  height: 600px;
  overflow: hidden;

  .view-port {
    display: flex;
    align-items: center;
    padding: 0 100px;
    min-width: 100%;
    height: 100%;
    transition: 0.3s;

    img {
      height: auto;
      width: 100%;
    }
  }

  @media screen and (max-width: 996px) {
    height: 60vw;
    .view-port {
      padding: 0 40px;
    }
  }
}
</style>
