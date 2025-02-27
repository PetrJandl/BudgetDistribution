<template>
	<Books />
</template>

<script>
import Books from './views/Books.vue'; 

import axios from "axios";

export default {
  components: {
    Books  // Definujeme komponentu Books v rámci App
  },
    data() {
        return {
            vueNotLoad: false,
            books: [],
        };
    },
    methods: {
        getItems() {
            axios
                .get("https://bshop.kmhk.cz/api/recommend.json")
                .then((response) => {
                    response.data.forEach((item) => {
                        item.piece = 1;
                        if (item.item_type_idtype === 1) {
                            this.books.push(item);
                        }
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
            //console.log(this.books)
        },
    },
    beforeMount() {
        this.getItems();
        //console.log("App: "+this.books)
    },
};
console.log("app");
</script>

<style>
body {
    background-size: auto !important;
    background-position: top center !important;
}
.items {
	color: #3d3d3d;
	font-family: "Roboto", Sans-serif;
	font-size: 19px;
	line-height: 1.7em;
}
.items :first-child {
    padding-top: 0em;
}
.items :last-child {
    border: 0px;
}
.item {
    border-bottom: #ededed 1pt solid;
    padding-top: 2em;
    padding-bottom: 2em;
}
.text-right {
    text-align: right;
}
.nahledPomucky {
    max-height: 200pt;
}
.sumary {
    text-align: right !important;
}

.text-justify {
    text-align: justify;
}
.previewCover {
    float: left;
    width: 202px;
}
.previewCover img {
    max-width: 100%;
    border-radius: 35px;
    background-color: #ededed;
}
.previewCover a {
    display: block;
}
@media (max-width: 768px) {
	.previewCover {
		width: 150px;
    		padding-right: 21px;
	}
}
@media (max-width: 575px) {
	.previewCover {
		float: none;
	}
	.previewCover{
		width: auto;
		text-align: center;
	}
	.previewCover img{
		width: 60%;
	}
}
</style>
