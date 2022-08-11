import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    console.log('allPostsData')
    console.log(allPostsData)
    return {
      props: {
        allPostsData,
      },
    };
}

export default function showlist({allPostsData,...req}, res) {
    console.log(req.query);
    console.log(allPostsData);
    res.status(200).json({ text: 'list' });
}
  