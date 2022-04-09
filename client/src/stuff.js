.then((updatedPost) => setClick((is_click)=>!is_click));

const [is_click, setClick] = useState(post.is_click)