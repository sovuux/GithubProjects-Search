import axios from "axios";

const API_URL = "https://api.github.com/search/repositories?q="

const ApiQeuries = {
    async searchSubject(searchText) {
        try {
            const response = await axios.get(API_URL + `${searchText}`)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }
}
export default ApiQeuries
