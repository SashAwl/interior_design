<template>
  <ul class="pagination">
    <li>
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage"
        :class="{ 'block-button': isInFirstPage }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
        </svg>
      </button>
    </li>
    <li>
      <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage"
        :class="{ 'block-button': isInFirstPage }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </button>
    </li>
    <li v-for="page in pages" :key="page.name">
      <button type="button" :disabled="page.isDisabled" @click="onClickPage(page.name)"
        :class="{ 'disabled-button': page.isDisabled }">
        {{ ("00" + page.name.toString()).slice(-2) }}
      </button>
    </li>
    <li>
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage" :class="{ 'block-button': isInLastPage }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </button>
    </li>
    <li>
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage" :class="{ 'block-button': isInLastPage }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
        </svg> </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PaginationPages",
  props: ['maxVisibleButtons', 'totalPages', 'perPage', 'currentPage'], // perPage - количество результатов на страницу
  computed: {

    startPage() {  // отвечает за начальный номер группы видимых кнопок для переключения страниц

      if (this.currentPage === 1) { // если находимся на 1й странице
        return 1;
      }
      if (this.currentPage === this.totalPages) { // если находимся на последней странице
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1; // если находимся на промежуточной странице
    },

    pages() { // формирует список отображаемых кнопок  и их состояние 
      const range = [];
      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }
      return range;
    },

    isInFirstPage() {
      return this.currentPage === 1;
    },

    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      // this.currentPage = 1;
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      // this.currentPage = this.currentPage - 1;
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      // this.currentPage = page;
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      // this.currentPage = this.currentPage + 1;
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      // this.currentPage = this.totalPages;
      this.$emit('pagechanged', this.totalPages);
    }
  }
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@100;400&display=swap');
@import "../assets/_variables";

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 51px;

  button {
    padding: 17px 19px;
    border-radius: 52px;
    color: $colorHeading;
    font-size: 21px;
    font-family: $fontSansSerif;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
    border: 1px solid $colorBeige;
    background: white;
    cursor: pointer;
    transition: transform 0.1s ease-in;

    &:hover {
      transform: scale(1.2);
    }
  }

  .disabled-button {
    background: #F4F0EC;
    border: none;
    cursor: auto;
    pointer-events: none;
  }

  .block-button {
    cursor: auto;
    pointer-events: none;
  }

  li {
    list-style-type: none;
  }

  li~li {
    list-style-type: none;
    margin-left: 20px;
  }

  svg {
    width: 13px;
    padding: 1px 5px 0 6px;
  }

  li:first-child svg,
  li:last-child svg {
    width: 21px;
    padding: 0px 2px;
  }

  .hidden-extra-buttons {
    display: none;
  }
}
</style>
