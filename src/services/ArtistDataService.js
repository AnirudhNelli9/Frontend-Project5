import http from "../http-common";
class ArtistDataService {
  getAll() {
    return http.get("/artists");
  }
  get(id) {
    return http.get(`/artists/${id}`);
  }
  create(data) {
    return http.post("/artists", data);
  }
  update(id, data) {
    return http.put(`/artists/${id}`, data);
  }
  delete(id) {
    return http.delete(`/artists/${id}`);
  }
  deleteAll() {
    return http.delete(`/artists`);
  }
  findByTitle(title) {
    return http.get(`/artists?title=${title}`);
  }
}
export default new ArtistDataService();