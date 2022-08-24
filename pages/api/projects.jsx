export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/964511184827088926/1012010335873544203/Ekran_goruntusu_2022-08-12_131047.png",
      name: "MSEC DEV.",
      description:
        "It was a company that was established in 2020 and its purpose was to produce and sell Discord Bot Software. Msec Html, Javascript, Seashark, Python Etc. Games in Software Languages, Websites Etc. Selling Software.",
      link: "https://msecdev.xyz",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/964511184827088926/1012010057875075142/24E24361-75E8-4796-A331-964CB8CDA82A.gif",
      name: "Youtube",
      description:
        "I am a professional editor and intermediate software developer. I have been professionally interested in community management and development for 3 years, I have high level knowledge and experience in areas such as community management and social media management. I post videos about discord on my youtube channel.",
      link: "https://youtube.com/UmutBayraktarYT",
    },
     {
      id: 3,
      image: "https://caoscrew.com/assets/images/team/KK.jpg",
      name: "Caos Crew",
      description:
        "A magnificent and valuable nft collection of 8888 pieces.",
      link: "https://caoscrew.com/",
    }
  ];
  res.status(200).json(data);
};
