const Home = () => {
  const events = [
    {
      title: "President Cup Yantra Teens",
      image: "https://yantra.ran.org.np/uploads/events/president-cup-yantra-teens-event-image-20231124134549.png", 
    },
    {
      title: "President Cup Yantra Kids",
      image: "https://yantra.ran.org.np/uploads/events/president-cup-yantra-kids-event-image-20231124213512.png", 
    },
    {
      title: "ROBOSOCCER",
      image: "https://yantra.ran.org.np/uploads/events/yantra-international-league[robosoccer]-event-image-20231124212739.png",
    },
    {
      title: "Yantra Autonomous Industries",
      image: "https://yantra.ran.org.np/uploads/events/yantra-autonomous-industries-[yai]-event-image-20231124213849.png", 
    },
  ];
  return(<>
  <div className="relative bg-gradient-to-r from-gray-800 to-purple-900 text-white h-[70vh] flex items-center justify-center px-10">
     
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1741482528337-20ecc80c2fe8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="VR Experience"
          className="min-w-full max-h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Science | Tech |
          <br />
          Entrepreneurship
        </h1>
        <p className="mt-2 text-xl font-bold">
          <span className="text-black bg-gradient-to-r from-blue-500 to-purple-500 px-2">Festival</span>
        </p>
        <p className="mt-1 text-sm text-gray-300">
          Society 5.0 an intelligence system
        </p>
        <a
          href="#"
          className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white text-base font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          See more
        </a>
      </div>
    </div>
  
    <div className="bg-gradient-to-bl from-green-200 to-blue-300 p-10 flex flex-wrap justify-center gap-6">
      {events.map((event, index) => (
        <div
          key={index}
          className="w-64 p-4 bg-white rounded-2xl shadow-lg text-center border border-gray-300"
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="mt-3 text-lg font-semibold text-gray-800">
            {event.title}
          </h3>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-r from-green-300 to-blue-400 p-10 flex flex-col md:flex-row items-center justify-between">
    
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
        <img object-cover src="https://yantra.ran.org.np/uploads/events/president-cup-yantra-teens-event-image-20231124134549.png" alt="Event 1" className="rounded-lg" />
        <img object-cover src="https://yantra.ran.org.np/uploads/events/president-cup-yantra-kids-event-image-20231124213512.png" alt="Event 2" className=" md:w-[500px] h-[300px] rounded-lg" />
        <img object-cover src="https://yantra.ran.org.np/uploads/events/yantra-international-league[robosoccer]-event-image-20231124212739.png" alt="Event 3" className="rounded-lg" />
        <img object-cover src="https://yantra.ran.org.np/uploads/events/yantra-autonomous-industries-[yai]-event-image-20231124213849.png" alt="Event 4" className="rounded-lg" />
      </div>

    
      <div className="md:w-1/2 text-white px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Explore <span className="text-blue-600">Yantra 10.0</span> Events
        </h2>
        <p className="mt-4 text-gray-200">
          The Robotics Association of Nepal (RAN) organizes the Yantra Science Tech
          and Entrepreneurship Festival every year to honor science, technology,
          and entrepreneurship in Nepal. The mission is to create a platform that
          encourages interdisciplinary collaboration among creative and technical
          fields, fostering learning and exchange.
        </p>
        <p className="mt-2 text-gray-200">
          Each edition of Yantra features international robotics competitions,
          Mini-Yantra, Yantra Business Cup, preparatory workshops, AI conferences,
          and more. The theme of Yantra 9.0 was "Climate Change and Future of Work."
        </p>
        <div className="mt-6 flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700">
            Play now
          </button>
          <button className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-white">
            ▶
          </button>
        </div>
      </div>
    </div>

    <div className="relative bg-gradient-to-r from-gray-800 to-purple-900 p-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
     
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-white px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-purple-200">
            Our Objectives
          </h2>
          <ul className="space-y-6">
            {[
              "Implementation and development of Science, Technology, and Innovation to maximize national production capacity through Robotics and Automation.",
              "Push innovation and entrepreneurship based on emerging technologies of Nepal.",
              "Build globally competent Robotics and Automation manpower.",
              "Encouraging the practice of Science and Technology all over Nepal."
            ].map((objective, index) => (
              <li key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-purple-700 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {objective}
                </p>
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-gradient-to-r from-gray-700 to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-gray-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            Explore Events
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-700 to-purple-700 rounded-lg blur opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Robot Illustration" 
              className="relative rounded-lg w-full max-w-md shadow-2xl transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </div>

</>) 
}

export default Home; 
