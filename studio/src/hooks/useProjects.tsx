import Axios from 'axios';
import useSWR from "swr";

const useProjects = () => {
    const fetcher = (url: string) => Axios.get(url).then(res => res.data);
    const { data } = useSWR("https://jsonplaceholder.typicode.com/todos/1", fetcher);
    return { projects: data };
}
export default useProjects;