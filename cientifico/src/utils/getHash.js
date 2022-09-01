const getHash = () => {
    let locationHash = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    console.log(locationHash);
    return locationHash;
}
export default getHash;