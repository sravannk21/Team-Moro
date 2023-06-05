<template>
  <section class="portfolio my-5">
    <MainHeading>Explore our recent works</MainHeading>
    <div class="container text-center my-5">
      <Paragraph
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        laudantium autem libero perspiciatis inventore odit eligendi corporis
        assumenda porro aperiam quas, omnis cumque? Consectetur provident ut
        sint, necessitatibus inventore mollitia!</Paragraph
      >
    </div>
    <div class="container">
      <div class="text-center my-5">
        <button @click="filterProjects('all')" class="filter-button p-1 mx-2">
          All
        </button>
        <button @click="filterProjects('graphics')" class="filter-button p-1 mx-2">
          Graphics
        </button>
        <button @click="filterProjects('web')" class="filter-button p-1 mx-2">
          Web
        </button>
      </div>
      <div class="gallery">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="gallery-item"
        >
          <img :src="project.imageUrl" :alt="project.title" class="img-fluid" />
          <div class="img-info">
            <button @click="showImage(project.id - 1)" class="view-btn">
              View
            </button>
          </div>
        </div>
      </div>
      <div v-if="selectedImage !== null" class="modal">
        <span class="close" @click="closeImage">&times;</span>
        <img
          :src="portfolioItems[selectedImage].imageUrl"
          :alt="portfolioItems[selectedImage].title"
        />
        <div class="caption">{{ portfolioItems[selectedImage].title }}</div>
      </div>
    </div>
  </section>
  <portfolio2 />
</template>

<script>
import MainHeading from "../Typography/MainHeading.vue";
import Paragraph from "../Typography/Paragraph.vue";
export default {
  name: "PortfolioMoro",
  components: {
    MainHeading,
    Paragraph,
  },
  data() {
    return {
      buttonColor: 'red',// Initial color
      portfolioItems: [
        {
          id: 1,
          type: "Item 1",
          imageUrl: require("./img/portfolio/1.jpg"),
        },
        {
          id: 2,
          type: "Item 2",
          imageUrl: require("./img/portfolio/2.jpg"),
        },
        {
          id: 3,
          type: "graphics",
          imageUrl: require("./img/portfolio/3.jpg"),
        },
        {
          id: 4,
          type: "graphics",
          imageUrl: require("./img/portfolio/4.jpg"),
        },
        {
          id: 5,
          type: "graphics",
          imageUrl: require("./img/portfolio/5.jpg"),
        },
        {
          id: 6,
          type: "web",
          imageUrl: require("./img/portfolio/6.jpg"),
        },
        {
          id: 7,
          type: "web",
          imageUrl: require("./img/portfolio/7.jpg"),
        },
        {
          id: 8,
          type: "web",
          imageUrl: require("./img/portfolio/8.jpg"),
        },
        {
          id: 9,
          type: "web",
          imageUrl: require("./img/portfolio/9.jpg"),
        },
        {
          id: 10,
          type: "web",
          imageUrl: require("./img/portfolio/10.jpg"),
        },
        {
          id: 11,
          type: "web",
          imageUrl: require("./img/portfolio/11.jpg"),
        },
        {
          id: 12,
          type: "web",
          imageUrl: require("./img/portfolio/12.jpg"),
        },
        {
          id: 13,
          type: "web",
          imageUrl: require("./img/portfolio/13.jpg"),
        },
        {
          id: 14,
          type: "web",
          imageUrl: require("./img/portfolio/14.jpg"),
        },
        {
          id: 15,
          type: "web",
          imageUrl: require("./img/portfolio/15.jpg"),
        },
        {
          id: 16,
          type: "web",
          imageUrl: require("./img/portfolio/16.jpg"),
        },
        {
          id: 17,
          type: "web",
          imageUrl: require("./img/portfolio/17.jpg"),
        },
        {
          id: 18,
          type: "web",
          imageUrl: require("./img/portfolio/18.jpg"),
        }
      ],
      selectedImage: null,
      selectedFilter: "all",
    };
  },
  methods: {
    showImage(index) {
      this.selectedImage = index;
    },
    closeImage() {
      this.selectedImage = null;
    },
    filterProjects(filter) {
      this.selectedFilter = filter;
    },
    changeColor(){
      this.buttonColor = 'black'
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedFilter === "all") {
        return this.portfolioItems;
      } else {
        return this.portfolioItems.filter(
          (portfolioItems) => portfolioItems.type === this.selectedFilter
        );
      }
    },
  },
};
</script>

<style scoped lang="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
}
.view-btn {
  border: none;
  padding: 0.2rem 2rem;
  color: #fff;
  font-size: 0.7rem;
  background-color: #000;
  transition: all 0.6s;

  &:hover {
    background-color: #000;
    color: #fff;
  }
}
.gallery-item {
  width: 200px;
  height: 200px;
  margin: 0 auto 1.2rem auto;
  position: relative;
  &:hover .img-info {
    bottom: 12%;
    opacity: 1;
  }
}

.img-info {
  text-align: center;
  color: #fff;
  position: absolute;
  bottom: -10%;
  left: 50%;
  transition: all 0.6s;
  opacity: 0;
  transform: translate(-50%, -50%);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.7);
  }
}

.filter-button {
  width: 4rem;
  font-size: .7rem;
  transition: all 0.6s;
  &:hover {
    background-color: #000;
    color: #fff;
    border: #fff;
  }
}

.modal {
  z-index: 200 !important;
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal img {
  max-width: 90%;
  max-height: 90%;
  display: block;
  margin: 0 auto;
}

.close {
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
}

</style>
