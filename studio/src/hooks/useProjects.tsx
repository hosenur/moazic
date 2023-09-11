import Axios from 'axios';
import useSWR from "swr";
import useURLHandler from './useURLHandler';

const useProjects = () => {
    const url = useURLHandler("/projects")
    const fetcher = (url: string) => Axios.get(url).then(res => res.data);
    const { data, isLoading } = useSWR(url, fetcher);
    return { projects: data, isLoading };

}
export default useProjects;