type Props = {
    url: string;
    method: string;
};
const useRequest = ({ url, method }: Props) => {
    console.log(url, method)
}

export default useRequest;