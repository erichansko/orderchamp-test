<template>
  <div class="variants-container">
    <table>
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Variants</th>
          <th>Price</th>
          <th>MSRP</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>
            <div class="count-control">
              <img
                src="../assets/minus.svg"
                alt="minus"
                @click="decreaseCount(index)"
              />
              <input :value="counts[index]" />
              <img
                src="../assets/plus.svg"
                alt="plus"
                @click="increaseCount(index)"
              />
            </div>
          </td>
          <td>
            <div>
              {{ item.node.options[0].value }} {{ item.node.options[1].value }}
            </div>
          </td>
          <td class="price">€ {{ item.node.price }}</td>
          <td>
            <div>
              <p>{{ item.node.msrp }}</p>
              <p>* 1.7</p>
            </div>
          </td>
          <td>
            <img class="check" src="../assets/circle-check.svg" alt="plus" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { VariantItem } from "@/types";

type State = {
  counts: number[];
};

export default defineComponent({
  name: "Variants",
  components: {},
  props: {
    items: { type: Array as PropType<VariantItem[]>, required: true },
  },
  data(): State {
    return {
      counts: [],
    };
  },
  watch: {
    items() {
      this.counts = Array(this.items.length)
        .fill("")
        .map(() => 0);
    },
  },
  methods: {
    increaseCount(index: number) {
      this.counts[index] = Number(this.counts[index]) + 1;
    },
    decreaseCount(index: number) {
      this.counts[index] = Math.max(Number(this.counts[index]) - 1, 0);
    },
  },
});
</script>

<style lang="scss">
.variants-container {
  padding-top: 40px;
  overflow: auto;

  table {
    min-width: 440px;
  }

  tr {
    th {
      text-align: left;
      padding: 8px 10px;
    }

    th:first-child {
      text-align: center;
    }

    td {
      padding: 10px 16px;
      border-top: 1px solid #eee;
    }
  }

  .count-control {
    display: flex;
    align-items: center;

    input {
      height: 40px;
      width: 60px;
      margin: 0 12px;
      text-align: center;
    }

    img {
      width: 14px;
      height: 14px;
      cursor: pointer;
      opacity: 0.5;

      &.disabled {
        opacity: 0.2 !important;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .check {
    width: 20px;
    height: 20px;
  }

  .price {
    white-space: nowrap;
  }
}
</style>
