import Chat from '../../components/chat/chat';
import { useRouter } from 'next/router';


const Page = () => {
  const router = useRouter();
  const { username, room } = router.query;
  console.log("Page index    ",username,"      ",room)
  return (
  <>
    <Chat nickname={username} room={room} />
  </>
  );
}

export default Page
