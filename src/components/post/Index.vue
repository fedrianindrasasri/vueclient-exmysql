<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="input-group mb-3">
                    <input type="text" class="form-control">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">
                            search
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-8">
                <h4>
                    Posts List
                </h4>
                <div class="card mb-3" v-for="(post, index) in posts " :key="index">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ post.published ? 'Publish' : 'Unpublished' }}</h6>
                        <p class="card-text">{{post.description}}</p>
                        <a href="#" class="card-link">Edit</a>
                    </div>
                </div>

                <button class="btn btn-sm btn-danger m-3">
                    Remove All
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import PostService from "../../services/PostService";

export default {
    name: "posts-list",

    data(){
        return {
            posts: [],
        }
    },

    methods: {
        retrievePost(){
            PostService.getAll()
            .then((result) =>{
                this.posts = result.data
                console.log(result.data);
            }).catch((err)=>{
                console.log(err);
            });
        }
    },

// untuk mengambil method diatas
    mounted(){
        this.retrievePost();
    }
}
</script>