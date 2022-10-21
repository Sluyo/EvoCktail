import http from "../http-common";

class ProductDataService {
  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post("/products", JSON.stringify(data));
  }

  update(id, data) {
    return http.put(`/products/${id}`,  JSON.stringify(data));
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }
}

export default new ProductDataService();