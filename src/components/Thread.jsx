import { MoreHorizontal, Heart, Repeat, Send, MessageCircle } from "react-feather"

export const Thread = () => {
  return (
    <div className="flex p-4 justify-between">
        <img 
          className="w-10 h-10 rounded-full object-cover"
          src="https://pbs.twimg.com/profile_images/1684157928981274624/OySm0vuw_400x400.jpg" 
        />
      <div>
        <div className="w-full px-2 pb-4 border-b border-[rgba(97,97,97,1)]" >

          {/** Thread Header */}
          <div className="flex justify-between gap-2">
            <strong>Halil Ibrahim</strong>

            <div className="flex justify-between gap-2">
                <p className="text-[rgba(97,97,97,1)]">3hrs ago</p>
                <MoreHorizontal/>
            </div>
          </div>
          {/** Thread Body */}

          <div className="py-4">
            <span>Software Developer 🚀Frontend: React.js, Next.js, React Native, Vue.js | Backend: Node.js, Express.js | 🎯 JavaScript & TypeScript</span>
          </div>

          <div className="flex gap-4 py-4">
            <Heart size={22}/>
            <MessageCircle size={22}/>
            <Repeat size={22}/>
            <Send size={22}/>
          </div>

          <div className="flex gap-4">
            <p className="text-[rgba(97,97,97,1)]">Replies 16</p>
            <p>.</p>
            <p className="text-[rgba(97,97,97,1)]">87 Likes</p>
          </div>

        </div>
      </div>
    </div>
  )
}
