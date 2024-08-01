import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../types/Post";
import { FaMoon, FaSun } from "react-icons/fa";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isNightMode, setIsNightMode] = useState<boolean>(true);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!response.ok) {
          throw new Error("Network Issue");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError("Failed to fetch post");
      }
    };

    fetchPost();
  }, [id]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`w-full h-[100vh] overflow-x-hidden ${isNightMode
          ? "bg-gradient-to-r from-[#121723] to-[#122435] text-gray-200"
          : "bg-gradient-to-r from-gray-100 to-[#a0b4c7] text-gray-900"
        }`}
    >
      <div className="container px-10 mx-auto py-12 md:py-24">
        <div className="flex flex-wrap items-center justify-between py-6">
          <div></div>
          <button
            onClick={toggleNightMode}
            className="text-2xl p-2 rounded-full hover:bg-gray-300"
          >
            {isNightMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <div className="mx-32">
          <div className="min-h-[18vh]">
            <h1 className="text-5xl font-bold mb-10">{post.title}</h1>
            <div className="flex m-1">
              <div className="flex justify-center items-center mb-10">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white">
                  YP
                </span>
                <p className="text-xl px-2">By Yash Patel</p>
                <div className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-calendar-days "
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>
              <div className="px-2 text-xl">
                31 August, 2024
              </div>
                </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-center m-8">
            <img
              src="https://picsum.photos/600/350"
              alt="img"
              className="rounded-t-xl w-[100vh]"
            />
          </div>
          <div className="py-2 text-xl space-y-2">
            <p>{post.body}</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              pariatur voluptatum necessitatibus adipisci ab alias repellendus
              perspiciatis numquam possimus blanditiis accusamus ex quas, dicta
              quo porro quam ipsa rerum hic esse. Exercitationem et, voluptatum
              officiis iure itaque blanditiis! Dicta mollitia sapiente voluptas
              ab, eos explicabo eveniet harum ducimus illum, consectetur omnis!
              Consequatur, est? Delectus qui amet itaque distinctio inventore,
              praesentium eos enim similique quas necessitatibus nostrum in
              eaque repellendus quasi quo at minima beatae. Harum magni quod
              recusandae nemo vitae, ut aperiam ipsam officia praesentium
              numquam? Nisi sequi sit doloremque facilis nemo vel atque
              eligendi? Quasi expedita velit tempora molestiae totam accusamus
              odio repellendus labore possimus, nihil quis soluta, mollitia quod
              doloribus exercitationem quisquam culpa voluptate excepturi quo
              inventore? Id quod adipisci corrupti, fugiat vero dolorem rem
              commodi quo consectetur natus deserunt, ducimus, sequi illum?
              Delectus soluta, labore rem atque et aut qui, nisi quam modi
              corporis dignissimos eos quas velit voluptates recusandae!
              Dignissimos corporis vel expedita numquam, doloribus saepe nisi
              eos dolor quos vero mollitia? Magni autem beatae ipsum odio
              inventore nulla? Quasi deleniti beatae, aut vero consequuntur
              vitae blanditiis quod omnis dolore mollitia recusandae obcaecati
              adipisci esse quibusdam expedita, atque laboriosam? Sequi, a
              consequatur nihil nemo aut saepe cum itaque perspiciatis unde
              doloribus? Reprehenderit suscipit eius dolores nobis, architecto
              rerum, inventore quasi esse necessitatibus odit molestiae facere
              ratione maxime veritatis quod. Quisquam cupiditate magnam nesciunt
              magni vitae fugit hic quod tempore laborum. Totam non ad possimus
              reprehenderit. Natus corporis saepe animi dolore quo illo minima
              pariatur? Corrupti omnis officiis soluta suscipit quasi veritatis,
              saepe cumque nemo dolorem pariatur voluptas iste quia! Vel
              possimus odio recusandae fuga soluta aspernatur, qui quae delectus
              dolorem distinctio fugit cumque assumenda deleniti maxime
              excepturi est eligendi adipisci. Veniam deleniti iure quo soluta,
              magnam modi asperiores ipsa doloremque quaerat. Voluptas molestias
              dolor sed laborum.
            </p>
            <h1 className="text-3xl font-bold">Random Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              dolorum iste tenetur fugit facilis deserunt. Molestiae recusandae,
              laboriosam quia dignissimos in quos suscipit ducimus nostrum
              consequuntur id ea dolores ipsam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              rerum doloribus odit repellat libero numquam saepe quod sequi
              earum omnis in itaque est non dolores vero maxime possimus,
              excepturi eveniet recusandae iure delectus temporibus quam!
              Explicabo ipsa voluptatem eum cum nihil nemo! Optio nulla
              temporibus animi ipsum consequuntur quasi unde enim explicabo
              dolorum, modi reprehenderit repellendus necessitatibus eum rem,
              doloribus esse vero sint cum perferendis iure incidunt quidem?
              Illo inventore perspiciatis eligendi voluptatum! Porro odio
              laudantium assumenda officia blanditiis facere itaque ratione
              voluptatum dolor nemo quia, dolore, voluptas debitis voluptates
              dolorem nulla. Numquam quo ducimus voluptatem corrupti similique
              exercitationem dolor repellat explicabo fuga, repudiandae impedit
              natus optio nostrum architecto dicta eum atque reiciendis veniam!
              Cupiditate at nobis iusto harum asperiores, ratione neque fugiat
              fuga aperiam natus assumenda quisquam illo quasi odit temporibus
              laboriosam deserunt reiciendis expedita ipsum, hic delectus eum
              sequi. Aspernatur at consectetur quidem facilis, nemo repellendus
              consequatur velit expedita exercitationem quas voluptatibus
              excepturi enim, commodi minima quaerat provident blanditiis,
              placeat facere corporis? At, quis quisquam nesciunt molestias
              sapiente nam perferendis ratione laborum obcaecati deleniti harum
              sequi ullam. Blanditiis nisi odit nulla, tenetur nam eligendi,
              velit fuga ipsa quis excepturi quod numquam, ex voluptatem quas
              illo dicta rerum error?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
