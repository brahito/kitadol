const FindLocalUrl = () => {
    const origin = (typeof window === 'undefined') ? '' : window.location.origin;
    return origin;
}

export default FindLocalUrl;