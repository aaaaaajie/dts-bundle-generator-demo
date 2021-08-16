import Repository from "./repository";

export default abstract class TeamRepository extends Repository {
    public Op() {
        console.log("hello Repository Op");
    }
}