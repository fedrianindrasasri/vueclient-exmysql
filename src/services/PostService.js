import http from "../http";

class PostService {
    getAll() {
        return http.get("/posts");
    }

    create() {

    }

    update() {

    }
}

export default new PostService;