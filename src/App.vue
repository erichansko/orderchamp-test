<template>
  <div class="root">
    <div class="container">
      <div class="image-list">
        <ImageList
          :items="listImages"
          :select-item="setActiveId"
          :active-id="activeId"
        />
      </div>
      <div class="image-view-port">
        <ImageViewPort :items="listImages" :active-id="activeId" />
      </div>
      <div class="product-info">
        <div class="info">
          <span>{{ name }} - € {{ minimumOrderAmount }} Order Minum</span>
        </div>
        <h1 class="title">{{ title }}</h1>
        <h1>€ {{ price }}</h1>

        <Variants :items="variants" />

        <div>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageList from "@/components/ImageList.vue";
import ImageViewPort from "@/components/ImageViewPort.vue";
import Variants from "@/components/Variants.vue";
import responseData from "@/constants/data";
import { AppState } from "@/types";

export default defineComponent({
  name: "App",
  components: {
    ImageList,
    ImageViewPort,
    Variants,
  },
  data(): AppState {
    return {
      listImages: [],
      activeId: "",
      name: "",
      avatar: "",
      reviewScore: 0,
      minimumOrderAmount: "",
      realAverageReviewScore: 0,
      totalReviewCount: 0,
      title: "",
      url: "",
      description: "",
      currency: "",
      variants: [],
      price: "",
    };
  },
  computed: {
    items() {
      return this.$store.getters.notCompletedItems;
    },
  },
  methods: {
    setActiveId(id: string) {
      this.activeId = id;
    },
  },
  mounted() {
    const { data } = responseData;
    this.listImages = data?.storefrontBySlug?.listing?.images?.edges || [];
    this.activeId = this.listImages.length ? this.listImages[0].node.id : "";
    this.name = data?.storefrontBySlug?.name;
    this.minimumOrderAmount = data.storefrontBySlug.minimumOrderAmount;
    this.avatar = data.storefrontBySlug.avatar.transformedUrl;
    this.reviewScore = data.storefrontBySlug.reviewScore;
    this.realAverageReviewScore = data.storefrontBySlug.realAverageReviewScore;
    this.totalReviewCount = data.storefrontBySlug.reviews.totalCount;
    this.title = data.storefrontBySlug.listing.title;
    this.url = data.storefrontBySlug.listing.url;
    this.description = data.storefrontBySlug.listing.description;
    this.currency = data.storefrontBySlug.listing.currency;
    this.variants = data.storefrontBySlug.listing.variants.edges;
    this.price = data.storefrontBySlug.listing.msrpMin;
  },
});
</script>

<style lang="scss">
.root {
  padding: 20px;
  .container {
    border: 1px solid #eee;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    padding: 20px;

    .info {
      font-size: 14px;
      color: #555;
    }

    .title {
      margin: 20px 0;
    }

    button {
      height: 52px;
      max-width: 300px;
      width: 100%;
      background-color: black;
      color: white;
      margin-top: 40px;
    }

    .image-list {
      flex-shrink: 0;
    }

    .image-view-port {
      width: 60%;
      padding: 0 20px;
    }

    .product-info {
      width: 40%;
      padding-left: 40px;
    }

    @media screen and (max-width: 1400px) {
      flex-wrap: wrap;
      .image-list {
        width: 100%;
      }

      .image-view-port {
        padding: 0;
      }
    }

    @media screen and (max-width: 996px) {
      .image-view-port {
        width: 100%;
      }

      .product-info {
        width: 100%;
        padding-left: 0;
        padding-top: 40px;
      }
    }
  }
}
</style>
