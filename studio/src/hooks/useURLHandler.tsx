const useURLHandler = (slug: string) => {
    const URL = "https://localhost:3000";
    return {url: URL+slug};
}
export default useURLHandler;