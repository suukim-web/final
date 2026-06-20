document.addEventListener("DOMContentLoaded", function () {
  const tagButton = document.querySelector(".tag-toggle");

  const detailPanel = document.querySelector(".detail-panel");
  const detailOverlay = document.querySelector(".detail-overlay");

  const detailCover = document.querySelector(".detail-cover");
  const detailTitle = document.querySelector(".detail-info h2");
  const detailArtist = document.querySelector(".detail-info p");
  const detailTags = document.querySelector(".detail-tags");
  const detailText = document.querySelector(".detail-text");
  const detailArrow = document.querySelector(".detail-arrow");

  const playButton = document.querySelector(".play-button");
  const audio = document.querySelector("#super-duper-audio");

  const songData = {
    "super-duper": {
      title: "Mash It To The Youth Man, Mash It",
      artist: "Magical Youth - [Anthology]",
      cover: "./img/album/musicalyouth.jpg",
      audio: "./audio/superduper.mp3",
      link: "special.html",
      overlayClass: "overlay-yellow",
      tags: ["Radiant"],
      text: `
        <p>
          영국 버밍엄 출신의 청소년 레게 밴드 <span class="en">Musical Youth</span>가 발표한 곡이다.
          당시 멤버들의 나이는 대부분 10대 초중반이었으며, 성인 뮤지션들이
          주도하던 레게 씬에서 드문 존재였다.
        </p>
        <p>
          곡은 전통적인 루츠 레게의 무게감보다는 거리의 활기와 청춘의 에너지를
          내세운다. 반복되는 리듬과 단순한 구호는 정치적 주장보다 공동체의
          움직임과 낙관을 강조하며, 1980년대 영국 이민자 커뮤니티의 생동감을
          담아낸다.
        </p>
        <p>
          대표곡인 <span class="en">Pass The Dutchie</span>가 전 세계적인 성공을 거두며 밴드의 이름을
          알렸다면, 이 곡은 그들이 가진 또 다른 특징을 보여준다. 저항을 분노보다 춤으로 표현하는 태도다. 무언가에 맞서기보다 함께 움직이고, 함께 소리치는 방식의 에너지다.
          따라서 이 곡은 단순한 레게 음악이라기보다, 거리 위의 젊음과 공동체적 낙관을 기록한 것에 가깝다. 선명한 에너지를 가지고 있기 때문에 키워드맵에서는 이를 Radiant 태그로 분류하였다.
        </p>
      `
    },

    "youhavent": {
      title: "You Haven't Done Nothin'",
      artist: "Stevie Wonder - [Fulfillingness' First Finale]",
      cover: "./img/album/youhavent.jpg",
      audio: "./audio/youhavent.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-orange",
      tags: ["Sensual", "Radiant"],
      text: `
        <p>
          <span class="en">Stevie Wonder</span>가 1974년에 발표한 곡으로, 당시 미국 대통령이었던 
          <span class="en">Richard Nixon</span>을 공개적으로 비판한 대표적인 정치 노래 중 하나다. 
          워터게이트 사건으로 미국 사회에 대한 불신이 커지던 시기에 발표되었으며, 
          제목은 직역하면 "당신은 아무것도 하지 않았다"는 뜻이다. 
          </p>
        <p>곡은 정치적 메시지를 담고 있지만, 
          무거운 방식으로 접근하지 않는다. 날카로운 비판을 담고 있으면서도 펑크 
          리듬과 반복되는 훅을 통해 듣는 사람을 자연스럽게 움직이게 만든다. 실제로 후렴구의 
          집요한 반복은 항의라기보다 조롱에 가깝게 들리며, 분노를 외침이 아닌 리듬으로 표현한다.
          </p>
        <p>특히 곡에는 <span class="en">The Jackson 5</span>가 백보컬로 참여했는데, 이는 곡 특유의 활기와 
          대중성을 더욱 강화한다. 정치적 비판과 거리의 에너지가 공존하는 독특한 분위기는 
          스티비 원더가 가진 음악적 특징을 잘 보여주며, 그는 사회 문제를 이야기하면서도 사람들을 
          우울하게 만들기보다 오히려 더 크게 노래하고 춤추게 만든다. 그래서 이 곡은 단순한 
          항의 노래보다 권력을 비틀어 보는 집단적 에너지의 기록에 가깝다.
        </p>
      `
    },

    "ngiculela": {
      title: "Ngiculela-Es Una Historia-I Am Singing",
      artist: "Stevie Wonder - [Songs In The Key Of Life]",
      cover: "./img/album/ngiculela.jpg",
      audio: "./audio/ngiculela.mp3",
      link: "ngiculela.html",
      overlayClass: "overlay-red",
      tags: ["Sensual", "Radiant"],
      text: `
        <p>
          1976년 앨범 <span class="en">Songs in the Key of Life</span>에 수록된 곡으로, 
          영어와 스페인어, 줄루어가 교차하는 구조를 통해 “노래한다는 행위” 
          자체를 하나의 세계관으로 확장한다. 
        </p>
        <p>단순한 소울/펑크 트랙이라기보다, 
          개인의 내면 고백과 공동체 선언이 함께 작동하는 형식에 가깝다. 
          스티비 원더는 ‘노래하고 있다는 상태’ 자체를 통해 삶의 긍정성과 
          연결의 감각을 구축한다. 
        </p>
        <p>반복되는 리듬 위에 쌓이는 보컬 레이어는 
          여러 언어와 감정이 공존하는 장을 만드는데, 특히 영어와 스페인어의 교차는 단순한 
          장식이 아니라, 정체성과 커뮤니케이션의 경계를 흐리는 장치로 작동한다. 이는 
          하나의 언어로 환원되지 않는 감정의 층위를 드러내며, 음악이 오히려 언어 
          이전의 공통 감각으로 이동할 수 있다는 가능성을 보여준다. 그래서 이 곡은 
          “무엇을 말하는가”보다 “어떻게 존재하는가”에 더 가까운 음악이다. 
          메시지는 선언이 아니라 흐름이 된다. </p>
      `
    },

    "passthedutchie": {
      title: "Pass The Dutchie",
      artist: "Musical Youth - [Anthology]",
      cover: "./img/album/musicalyouth.jpg",
      audio: "./audio/passthedutchie.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-yellow",
      tags: ["Radiant", "Spectacle"],
      text: `
        <p>
          1982년 발표된 <span class="en">Musical Youth</span>의 대표곡으로, 
          전 세계적인 성공을 거두며 영국 레게 음악의 
          역사에 남은 작품이다. 당시 멤버들의 나이는 
          대부분 10대 초중반이었으며, 이 곡은 영국 
          싱글 차트 1위, 미국 빌보드 차트 10위권에 
          오르며 큰 인기를 얻었다.
        </p>
        <p>
        이 곡은 사실 자메이카 레게 그룹 <span class="en">The Mighty Diamonds</span>의 
        <span class="en">「Pass the Kouchie」</span>와 
        <span class="en">The Mighty Diamonds</span>의 
        <span class="en">「Pass the Dutchie」</span>를 
        바탕으로 만들어졌다. 원곡에 등장하는 <span class="en">'kouchie'</span>는 
        대마초를 피우는 파이프를 뜻하지만, 청소년 밴드였던 
        <span class="en">Musical Youth</span>는 이를 
        <span class="en">'dutchie'<span class="en">라는 요리 
        냄비로 바꾸어 불렀다.
        </p>
        <p>
        가사 역시 원곡의 약물 관련 내용을 대부분 제거하고, 
        배고픔과 음식에 대한 이야기로 수정되었다. 그래서 
        많은 청취자들은 이 노래를 단순히 즐겁고 유쾌한 
        노래로 받아들였지만, 실제로는 자메이카 레게 음악의 
        전통과 영국 카리브 이민자 문화가 반영된 작품이기도 하다.
        </p>
        <p>
        음악적으로는 레게 특유의 리듬을 유지하면서도 
        밝고 친근한 멜로디를 강조한다. 어린 멤버들의 
        목소리와 반복적인 후렴구는 공동체의 에너지와 
        거리의 활기를 자연스럽게 전달하며, 당시 영국 
        대중음악 시장에서 보기 드물었던 흑인 청소년 
        밴드의 존재를 널리 알리는 계기가 되었다.
        </p>
      `
    },

    "iwantyou": {
      title: "I Want You back",
      artist: "Jackson 5",
      cover: "./img/album/iwantyou.jpg",
      audio: "./audio/iwantyou.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-skyblue",
      tags: ["Sensual", "Radiant"],
      text: `
        <p>
          1969년 발표된 <span class="en">Jackson 5</span>의 데뷔 싱글로, 당시 열한 살이었던 마이클 잭슨의 목소리를 내세워 
          전 세계적인 성공을 거두었다. <span class="en">Motown</span> 레이블의 작곡·프로듀싱 팀인 <span class="en">'The Corporation'</span>이 
          제작했으며, 발매 직후 미국 차트 1위에 오르며 <span class="en">Jackson 5</span> 시대의 시작을 알렸다.
          곡은 헤어진 연인을 그리워하는 내용을 담고 있지만, 일반적인 실연 노래와는 분위기가 다르다. 
          </p>
        <p>후회와 아쉬움을 이야기하면서도 음악은 끝없이 앞으로 달려간다. 빠른 베이스 라인과 역동적 리듬, 
          마이클 잭슨의 밝은 보컬은 슬픔보다 생명력에 가까운 에너지를 만들어낸다.
          특히 이 곡의 특징은 감정을 무겁게 끌어안기보다 솔직하게 드러낸다는 점이다. 
          상대를 잃은 후에야 자신의 마음을 깨닫는 내용이지만, 모든 감정을 있는 힘껏 외치며 앞으로 나아간다.
          1960년대 말 미국 대중음악이 점점 더 복잡하고 실험적인 방향으로 나아가던 시기, <span class="en">I Want You Back</span>은 
          단순하고 직접적인 기쁨과 설렘을 다시 내세웠다. </p>
        <p>그래서 이 곡은 단순한 러브송이 아니라, 젊음이 가진 
          낙관과 순수한 열정을 압축한 것에 가깝다. 따라서 이 곡은 잃어버린 사랑에 대한 노래라기보다 
          마음이 몸보다 먼저 뛰어가기 시작하는 순간의 기록에 가깝다.
        </p>
      `
    },

    "timeaftertime": {
      title: "Time After Time",
      artist: "Cyndi Lauper - [She's So Unusual]",
      cover: "./img/album/timeaftertime.jpg",
      audio: "./audio/timeaftertime.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-blue",
      tags: ["Sensual"],
      text: `
        <p>
          1983년 발표된 <span class="en">Cyndi Lauper</span>의 데뷔 앨범 
          <span class="en">She's So Unusual</span>에 수록된 곡이며
          화려한 이미지로 알려졌던 <span class="en">Cyndi Lauper</span>가 
          자신의 가장 내밀한 감정을 보여준 노래이기도 하다. 
          </p>
        <p>발매 이후 미국 차트 1위에 오르며 1980년대 팝을 대표하는 발라드 중 하나가 되었으며,
          곡은 사랑을 맹세하거나 강한 감정을 외치는 대신 누군가가 길을 잃었을 때 곁에 있겠다는 
          약속을 이야기한다. 신디사이저와 잔잔한 리듬 위에 놓인 목소리는 일상의 신뢰와 애정을 떠올리게 
          하기 때문에, 이 곡의 감정은 열정이라기보다 오래 지속되는 다정함에 가깝다. 1980년대 팝이 
          화려함과 과장된 감정을 자주 내세우던 시기, <span class="en">Time After Time</span>은 
          오히려 절제된 방식으로 사랑을 표현했다. 시간이 흘러도 사라지지 않는 신뢰를 기록한 노래에 가깝다.
        </p>
      `
    },

    "wantingyou": {
      title: "I'm Just Wanting You",
      artist: "Jesse Johnson - [Every Shade Of Love]",
      cover: "./img/album/wantingyou.jpg",
      audio: "./audio/wantingyou.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-brown",
      tags: ["Sensual"],
      text: `
        <p>
          <span class="en">Jesse Johnson</span>의 앨범 
          <span class="en">Every Shade of Love</span>에 수록된 곡으로, 
          <span class="en">inneapolis</span> 사운드를 대표하는 뮤지션 중 
          한 명인 <span class="en">Jesse Johnson</span>의 
          감각이 잘 드러나는 작품이다. 그는 밴드 <span class="en">The Time</span>의 
          기타리스트로 활동하며 <span class="en">Prince</span>와 함께 
          1980년대 펑크와 R&B의 새로운 흐름을 만들어냈다.</p>
        <p>
          곡은 사랑을 이야기하지만 감정을 쏟아내기보다 욕망과 그리움이 천천히 
          번져가는 순간에 집중한다. 부드러운 신디사이저와 여유로움 위에서 
          반복되는 보컬은 누군가를 향한 마음이 점점 더 선명해지는 과정을 그리며,
          기다림과 끌림의 정서가 곡 전체를 감싼다.</p>
        <p>
          1980년대의 화려한 팝과 펑크 음악들이 자신감을 내세웠다면, 
          <span class="en">I'm just wanting you</span>는
          그 이면에 있는 취약함을 보여준다. 솔직하게 상대를 원하고 있다는 사실을 
          드러내며, <span class="en">Minneapolis</span> 사운드 특유의 세련됨과 인간적인 감정을 동시에 
          담아낸다. 따라서 이 곡은 누군가를 생각하는 시간이 길어질수록 더 깊어지는 마음의 기록에 가깝다.</p>
      `
    },

    "themost": {
      title: "The Most Beautiful Girl In The World",
      artist: "Prince - [The Gold Experience]",
      cover: "./img/album/themost.jpg",
      audio: "./audio/themost.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-yellow",
      tags: ["Sensual"],
      text: `
        <p>
        1994년 발표된 곡으로, <span class="en">Prince</span>가 
        자신의 이름 대신 상징<span class="en">(Symbol)</span>으로 
        활동하던 시기에 공개한 대표작이다. </p>
        <p>당시 그는 음반사와의 갈등 속 기존의 
        이미지와 산업 시스템으로부터 독립하려 했으며, 이 곡은 그런 시기의 가장 밝고 
        낭만적인 순간을 담고 있다. 곡은 누군가를 향한 찬사를 노래하는데, 상대를 이상화된 
        존재로 묘사하면서도, 동시에 사랑에 빠진 사람이 세상을 바라보는 방식을 이야기하기에 
        노래의 중심에는 "가장 아름다운 사람"보다도, 사랑에 의해 변화된 시선이 놓여 있다.
        </p>
        <p>1990년대 <span class="en">R&B</span>와 팝의 세련된 프로덕션 위에 
        <span class="en">Prince</span> 특유의 부드러움과 관능성이 
        더해지면서, 곡은 화려함과 순수함 사이를 오간다. 육체적인 욕망을 노골적으로 
        드러내던 그의 다른 작품들과 비교하면 훨씬 따뜻하고 개방적이다.
        </p>
      `
    },

    "sexualhealing": {
      title: "Sexual Healing",
      artist: "Marvin Gaye - [Midnight Love & The Sexual Healing Sessions]",
      cover: "./img/album/sexualhealing.jpg",
      audio: "./audio/sexualhealing.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-black",
      tags: ["Sensual"],
      text: `
        <p>
        1982년 발표된 <span class="en">Marvin Gaye</span>의 대표곡으로, 
        오랜 공백기와 
        개인적인 혼란을 겪은 뒤 유럽에서 새롭게 활동을 시작하며 만든 작품이다. 
        당시 그는 음악 산업과의 갈등, 이혼, 약물 문제 등으로 힘든 시기를 
        보내고 있었으며,<span class="en">「Sexual Healing」</span>은 
        그런 삶의 균열 속에서 탄생한 재기의 노래이기도 하다.</p>
        <p>
        곡은 제목만 보면 단순한 사랑 노래처럼 보이지만, 실제로는 육체적 친밀함을 
        통해 삶의 상처를 회복하고자 하는 마음을 담고 있다. 
        <span class="en">Marvin Gaye</span>는 
        사랑과 욕망을 쾌락으로만 다루지 않고, 외로움과 불안, 피로를 달래는 
        치유의 힘으로 바라본다. 그래서 이 곡의 관능성은 과시적이거나 공격적이지 
        않고 부드럽고 인간적이다. </p>
        <p>드럼 머신과 신디사이저가 만들어내는 따뜻한 리듬과 
        <span class="en">Marvin Gaye</span> 특유의 보컬은 곡 전체를 
        친밀한 공간으로 만든다. 따라서 이 곡은 상처 입은 사람이 다시 삶과 연결되기를 바라는 회복의 노래에 가깝다.
        </p>
      `
    },

    "binz": {
      title: "Binz",
      artist: "Solange - [When I Get Home]",
      cover: "./img/album/binz.jpg",
      audio: "./audio/binz.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-grey",
      tags: ["Sensual"],
      text: `
        <p>
        <span class="en">Solange</span>의 앨범 
        <span class="en"><When I Get Home></span>에 수록된 곡으로, 
        2분도 채 되지 않는 짧은 러닝타임 안에 앨범 전체의 분위기를 
        압축해 놓은 듯한 작품이다.</p>
        <p> <span class="en">Houston</span> 
        출신인 <span class="en">Solange</span>는 이 
        앨범에서 자신의 고향과 흑인 문화, 공동체, 그리고 자기 자신에 
        대한 감각을 몽환적이고 실험적인 방식으로 풀어냈다.
        </p>
        <p><span class="en">Binz</span>의 반복되는 보컬과 느슨한 
        그루브는 충분하다는 감각에 가까운 분위기를 만들어내기 때문에 이 곡의 
        자신감은 과시적이기보다 자연스럽고 편안하다. 시끄럽지 않고 
        경쟁적이지 않다. 자신만의 속도로 살아갈 수 있게 된 사람의 여유를 
        기록한 노래에 가깝다.
        </p>
      `
    },

    "lefreak": {
      title: "Le Freak",
      artist: "Chic - [C'est Chic]",
      cover: "./img/album/lefreak.jpg",
      audio: "./audio/lefreak.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-beige",
      tags: ["Radiant"],
      text: `
        <p>
        1978년 발표된 <span class="en">Chic</span>의 대표곡으로, 
        디스코 시대를 상징하는 가장 유명한 노래 중 하나다. 프로듀서이자 
        기타리스트인 <span class="en">Nile Rodgers</span>와 
        베이시스트 <span class="en">Bernard Edwards</span>가 만든 
        이 곡은 뉴욕의 밤문화와 디스코 문화의 에너지를 압축해 보여준다.</p>
        <p>
        흥미롭게도 이 곡은 한 클럽 입장을 거부당한 경험에서 시작되었다. 당시 
        뉴욕 최고의 클럽이었던 <span class="en">Studio 54</span> 
        앞에서 입장을 거절당한 뒤, <span class="en">Nile Rodgers</span>와 
        <span class="en">Bernard Edwards</span>는 그 경험을 유머와 
        리듬으로 바꾸어 버렸다. 원래는 더 거친 표현이 들어갈 예정이었지만, 
        그것이 <span class="en">"Freak Out!"</span>이라는 후렴으로 
        바뀌며 오늘날의 곡이 탄생했다.</p>
        <p><span class="en"> Le Freak</span>의 
        가장 큰 특징은 복잡한 감정보다 몸의 움직임을 먼저 
        불러낸다는 점이다. 반복되는 기타 리프와 탄력 있는 베이스 라인은 
        생각보다 먼저 신체를 반응하게 만든다. 그래서 이 곡의 즐거움은 
        사람들 사이에서 전염되는 집단적 흥분에 가깝다.
        1970년대 후반 디스코 문화는 단순한 유행을 넘어 다양한 인종과 
        계층, 성 정체성을 가진 사람들이 한 공간에서 자유롭게 어울리는 
        문화적 공간이기도 했다. <span class="en">Le Freak</span>는 
        그런 시대의 개방성과 
        자신감을 가장 밝고 세련된 형태로 담아낸 노래 중 하나다.
        </p>
      `
    },

    "lover": {
      title: "I Wanna Be Your Lover",
      artist: "Prince - [Prince]",
      cover: "./img/album/lover.jpg",
      audio: "./audio/lover.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-skyblue",
      tags: ["Radiant", "sensual"],
      text: `
        <p>
        1979년 발표된 <span class="en">Prince</span>의 두 번째 앨범
        <span class="en"><Prince></span>에 수록된 곡으로, 
        그를 대중적으로 알린 첫 번째 대형 히트곡이다. 당시 스물한 살이었던 
        <span class="en">Prince</span>는 작곡, 연주, 프로듀싱 대부분을 
        직접 맡으며 자신만의 음악 
        세계를 구축하기 시작했고, 이 곡은 이후 그의 경력을 관통하게 될 사랑, 
        욕망, 자유로움의 감각을 이미 보여주고 있다.</p>
        <p>
        곡은 누군가를 향한 강한 끌림을 이야기하지만, 이후 <span class="en">Prince</span>의 
        음악에서 자주 등장하는 관능적이고 자신감 넘치는 태도와는 조금 
        다르다. 여기서 그는 설레는 사람에 가깝다. 
        상대를 향한 마음을 숨기지 못하는 젊은 에너지가 곡 전체를 움직인다.</p>
        <p>빠르게 움직이는 베이스와 반짝이는 신디사이저, 가볍게 튀어 
        오르는 보컬은 사랑에 빠진 직후의 들뜬 상태를 그대로 담아낸다. 
        그래서 이 곡은 욕망보다 호기심에 가깝고, 소유보다 동경에 가깝다. 
        상대를 얻기 위한 전략보다는 그 사람 곁에 있고 싶다는 순수한 충동이 먼저 느껴진다.
        </p>
        <p>
        <span class="en">Prince</span>가 훗날 만들어낼 수많은 사랑 노래들 가운데에서도 
        이 곡은 특별히 젊고 투명한 순간을 담고 있다. 세련됨과 자신감 
        뒤에 숨겨진 불안과 설렘이 동시에 존재하기 때문이다.
        </p>
      `
    },


    "iwilldare": {
      title: "I Will Dare",
      artist: "The Replacement - [Let It Be]",
      cover: "./img/album/iwilldare.jpg",
      audio: "./audio/iwilldare.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-blue",
      tags: ["cool"],
      text: `
        <p>
        1984년 발표된 앨범 <span class="en"><Let It Be></span>에 수록된 곡으로, 
        미국 미네소타 출신 밴드 <span class="en">The Replacements</span>를 
        대표하는 작품 중 하나다. 펑크 록의 거친 에너지와 팝적인 
        멜로디를 동시에 품고 있으며, 이후 수많은 인디 록 
        밴드들에게 영향을 준 곡으로 평가받는다.</p>
        <p>
        제목인 <span class="en">"I Will Dare"</span>는 직역하면 "나는 감히 해보겠다"는 
        뜻이다. 곡은 사랑에 대한 이야기이면서도 동시에 삶에 대한 
        태도를 이야기한다. 실패할 수도 있고, 거절당할 수도 있지만, 
        그럼에도 불구하고 먼저 손을 내밀고 앞으로 나아가겠다는 마음이 담겨 있다.
        </p>
        <p><span class="en">The Replacements</span>의 음악은 종종 불완전하고 서툴게 
        들린다. 하지만 바로 그 점이 이들의 매력이다. <span class="en">「I Will Dare」</span> 
        역시 완벽하게 정돈된 자신감보다는, 불안함을 안고도 움직이는 
        용기에 더 가까우며 가장 쿨하고 로맨틱한 음악 중 하나다.
        </p>
        <p> 화려한 팝 음악들이 성공과 매력을 강조하던 시기에, 
        <span class="en">The Replacements</span>는 실수하고 
        흔들리는 사람들의 이야기를 노래했다. 그래서 이 곡은 
        아직 준비되지 않았지만 일단 앞으로 걸어가는 사람들의 노래처럼 들린다.
        </p>
      `
    },


    "idiot": {
      title: "Idiot In The Park",
      artist: "Nourished By Time - [The Passionate Ones]",
      cover: "./img/album/idiot.jpg",
      audio: "./audio/idiot.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-red",
      tags: ["cool"],
      text: `
        <p>
        <span class="en">Nourished by Time</span>의 
        <span class="en">EP <The Passionate Ones></span>에 
        수록된 곡으로, 개인의 불안과 소외를 
        특유의 유머와 자기 인식을 통해 풀어내면서도
        로맨틱한 감정을 담고 있다. 곡은 거대한 서사보다 일상 
        속의 작고 우스운 단어들을 시적으로 묘사하는데,
        그 덕분에 로맨틱한 가사를 가장 효과적으로 전달한다.
        사랑 속의 우스운 순간의 미묘한 감정을 훌륭하게 묘사했다.</p>
      `
    },


    "ineedyourlove": {
      title: "I Need Your Love",
      artist: "Billy Foster, Audio - [Skyway Soul: Gary, Indiana]",
      cover: "./img/album/ineedyourlove.jpg",
      audio: "./audio/ineedyourlove.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-blue",
      tags: ["Radiant", "sensual"],
      text: `
        <p>
        <span class="en">「I Need Your Love」</span>는 <span class="en">Gary, 
        Indiana</span> 지역에서 활동했던 소울 뮤지션 
        <span class="en">Billy Foster</span>의 곡으로, 후에 지역 소울 
        음악을 재조명하는 컴필레이션 음반 
        <span class="en">[Skyway Soul: Gary, Indiana]</span>를 
        통해 다시 알려졌다.</p>
        <p>
        <span class="en">Billy Foster</span>는 전국적인 명성을 얻은 
        아티스트는 아니었지만, 1960~70년대 미국 
        중서부 지역에서 만들어진 독립 소울 음악의 
        흐름 속에서 활동한 가수였다. 이 곡 역시 
        대형 레이블의 화려한 프로덕션보다는 지역 
        음악 신<span class="en">(scene)</span>의 분위기를 담고 있으며, 
        당시 소울 음악 특유의 따뜻한 보컬과 밴드 
        연주가 중심이 된다.
        </p>
        <p>
        곡은 제목 그대로 사랑하는 사람에 대한 
        그리움과 애정을 이야기한다. 복잡한 서사나 
        사회적 메시지보다는 감정을 직접적으로 전달하는 
        전통적인 소울 음악의 형식을 따르고 있으며, 
        부드러운 멜로디와 진솔한 보컬이 곡의 중심을 이룬다.
        </p>
        <p>
        오늘날 이 곡이 다시 주목받는 이유는 음악사에 
        기록되지 못했던 지역 소울 음악의 매력을 보여주기 
        때문이다. 대중적으로 널리 알려진 작품은 아니지만, 
        당시 미국 지역 음악 문화의 한 단면을 담고 있는 
        기록으로서 의미를 가진다.
        </p>
      `
    },

    "upsidedown": {
      title: "Upside Down",
      artist: "Diana Ross - [Diana]",
      cover: "./img/album/upsidedown.jpg",
      audio: "./audio/upsidedown.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-pink",
      tags: ["Sensual"],
      text: `
        <p>
        1980년 발표된 <span class="en">Diana Ross</span>의 
        앨범 <span class="en">Diana</span>의 대표곡이다. 이 앨범은 당시 디스코와 펑크 
        음악의 중심에 있던 <span class="en">Chic</span>의 
        <span class="en">Nile Rodgers</span>와 
        <span class="en">Bernard Edwards</span>가 프로듀싱을 맡아 완성되었으며, 
        <span class="en">Upside Down</span>은 
        발매 직후 미국 빌보드 차트 1위에 오르며 
        <span class="en">Diana Ross</span>의 가장 
        큰 히트곡 중 하나가 되었다.</p>
        <p>
        곡은 사랑으로 흔들리는 감정을 이야기하는데, 제목인 <span class="en">"Upside Down"</span>은 
        누군가로 인해 자신의 세상이 뒤집혀 버린 상태를 의미한다. 
        하지만 노래는 고통보다 사랑이 만들어내는 혼란과 흥분을 경쾌한 리듬으로 표현한다.
        </p>
        <p>
        음악적으로는 <span class="en">Chic</span> 특유의 날렵한 기타 리프와 
        탄력적인 베이스 라인이 중심을 이룬다. <span class="en">Diana 
        Ross</span>의 보컬은 지나치게 감정적이기보다 세련되고 
        가볍게 흐르며, 곡 전체에 도시적인 자신감과 
        유쾌함을 부여한다. 그래서 이 노래의 매력은 
        절망적인 사랑 이야기가 아니라, 사랑에 빠졌을 때 
        세상이 조금 비틀려 보이는 즐거움에 있다.
        </p>
        <p>
        1980년대 초 디스코의 전성기가 저물어 가던 
        시기에 발표되었지만, <span class="en">Upside Down</span>은 
        디스코의 에너지와 팝의 대중성을 성공적으로 
        결합하며 오랫동안 사랑받는 클래식이 되었다.
        </p>
      `
    },


    "jody": {
      title: "Jody",
      artist: "Total Contrast - [Beat To Beat]",
      cover: "./img/album/jody.jpg",
      audio: "./audio/jody.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-purple",
      tags: ["Radiant"],
      text: `
        <p>
        <span class="en">Jody</span>는 영국의 알앤비·소울 그룹 
        <span class="en">Total Contrast</span>가 
        1985년에 발표한 곡이다. 
        <span class="en">Total Contrast</span>는 1980년대 
        중반 영국에서 활동하며 소울, 펑크, 일렉트로닉 
        사운드를 결합한 음악으로 알려졌으며, 
        <span class="en">Jody</span>는 그들의 
        대표적인 초기 작품 가운데 하나로 꼽힌다.</p>
        <p>
        곡은 부드러운 신시사이저와 리듬머신, 그리고 당시 영국 소울 음악 특유의 
        세련된 프로덕션을 바탕으로 전개된다. 미국 소울 음악의 영향을 받았지만, 
        1980년대 영국 팝과 R&B의 감각이 함께 드러나는 것이 특징이다.
        </p>
        <p>
        오늘날 <span class="en">Jody</span>는 당시 영국 소울 씬을 보여주는 작품 중 하나로 다시 조명되고 있으며, 
        특히 빈티지 소울과 부기<span class="en">(Boogie)</span>, 80년대 
        <span class="en">R&B</span>를 좋아하는 청취자들에게 
        꾸준히 사랑받고 있다.
        </p>
      `
    },


    "alldaysucker": {
      title: "All Day Sucker",
      artist: "Stevie Wonder - [Songs In The Key Of Life]",
      cover: "./img/album/ngiculela.jpg",
      audio: "./audio/alldaysucker.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-red",
      tags: ["Radiant"],
      text: `
        <p>
        <span class="en">All Day Sucker</span>는 
        <span class="en">Stevie Wonder</span>의 
        앨범 <span class="en">Songs in the Key of Life</span>에 수록된 곡이다. 
        이 앨범은 1970년대 <span class="en">Stevie Wonder</span>의 음악적 
        정점을 보여주는 작품으로 평가받으며, 사랑, 사회, 
        일상, 영성 등 다양한 주제를 담고 있다.</p>
        <p>
        곡은 빠른 리듬과 경쾌한 그루브를 중심으로 전개되며, 
        앨범 속 다른 곡들에 비해 가볍고 유쾌한 분위기를 가진다. 
        <span class="en">Stevie Wonder</span> 특유의 활기찬 보컬과 펑키한 리듬이 
        돋보이며, 복잡한 메시지보다는 사람 사이의 매력과 끌림을 
        즐겁게 표현한다.
        </p>
        <p>
        <span class="en">All Day Sucker</span>는 앨범의 중심 메시지를 담당하는 곡은 
        아니지만, <span class="en">[Songs in the Key of Life]</span>가 가진 
        풍부한 정서적 스펙트럼을 보여주는 작품 중 하나다. 
        진지함과 유머, 사회적 메시지와 개인적 감정이 함께 
        존재하는 앨범 안에서, 이 곡은 순수한 즐거움과 에너지를 담당한다.
        </p>
      `
    },


    "startofaromance": {
      title: "Start Of A Romance",
      artist: "Skyy - [Start Of A Romance]",
      cover: "./img/album/startofaromance.jpg",
      audio: "./audio/startofaromance.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-brown",
      tags: ["Radiant", "Spectacle"],
      text: `
        <p>
        <span class="en">Start of a Romance</span>는 
        미국 <span class="en">R&B</span> 그룹 <span class="en">Skyy</span>가 1989년에 발표한 곡으로, 
        앨범 <span class="en">[Start of a Romance]</span>의 타이틀곡이다. 
        <span class="en">Skyy</span>는 1970년대 후반부터 활동하며 펑크, 디스코, 
        <span class="en">R&B</span>를 결합한 음악으로 알려졌고, 1980년대 후반에는 
        보다 세련된 컨템포러리 <span class="en">R&B</span> 사운드로 변화했다.</p>
        <p>
        곡은 제목 그대로 사랑이 시작되는 순간을 다룬다. 강렬한 고백이나 극적인 서사보다는, 
        두 사람 사이에 특별한 감정이 생겨나기 시작하는 설렘과 기대에 집중한다. 
        부드러운 신디사이저와 안정적인 리듬은 당시 후반기 R&B 특유의 세련된 분위기를 만들어낸다.
        </p>
        <p>
        <span class="en">Skyy</span>의 초기 음악이 댄스플로어의 에너지에 가까웠다면, 
        <span class="en">Start of a Romance</span>는 보다 로맨틱하고 부드러운 방향을 보여준다. 
        사랑의 열정보다 관계가 시작되는 순간의 긴장감과 기대를 담고 있으며, 
        1980년대 말 <span class="en">R&B</span>가 가진 매끄럽고 도시적인 감성을 잘 보여주는 곡이다.
        </p>
      `
    },


    "icantwait": {
      title: "I Can't Wait",
      artist: "Nu Shooz - [Poolside]",
      cover: "./img/album/icantwait.jpg",
      audio: "./audio/icantwait.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-blue",
      tags: ["Radiant","Spectacle"],
      text: `
        <p>
        <span class="en">I Can't Wait</span>은 미국 오리건주 출신의 
        듀오 <span class="en">Nu Shooz</span>가 1985년에 발표한 곡으로, 1986년 미국 
        빌보드 싱글 차트 3위까지 오르며 세계적인 성공을 거두었다. 
        보컬리스트 <span class="en">Valerie Day</span>와 프로듀서 
        <span class="en">John Smith</span>로 이루어진 
        <span class="en">Nu Shooz</span>는 이 곡을 통해 1980년대 중반 신스팝과 댄스 
        팝을 대표하는 팀 중 하나로 자리 잡았다.</p>
        <p>
        곡은 누군가를 향한 기대와 설렘을 노래하는데, 제목인 <span class="en">"I Can't Wait"</span>은 
        직역하면 "기다릴 수 없다"는 뜻으로, 상대를 만나고 싶어 하는 
        마음과 감정의 조급함을 반복적으로 표현한다. 하지만 곡의 
        분위기는 무겁거나 절박하지 않고, 오히려 가볍고 활기차다.
        </p>
        <p>
        음악적으로는 신디사이저, 드럼 머신, 펑키한 베이스 라인이 중심이 되며, 당시 미국 
        서부 지역에서 발전하던 일렉트로닉 댄스 팝의 특징을 잘 보여준다. 반복되는 리듬과 
        밝은 멜로디는 사랑의 감정보다 움직임과 에너지 자체를 먼저 전달한다.
        1980년대 중반은 디지털 악기와 드럼 머신이 본격적으로 대중음악의 중심에 들어오던 시기였고, 
        <span class="en">I Can't Wait</span>은 그 변화가 만들어낸 세련되고 경쾌한 사운드를 대표하는 곡 중 
        하나로 남아 있다.
        </p>
      `
    },



    "bouncin": {
      title: "Bouncin'",
      artist: "Tinashe - [333]",
      cover: "./img/album/bouncin.jpg",
      audio: "./audio/bouncin.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-green",
      tags: ["Spectacle", "urban"],
      text: `
        <p>
        <span class="en">Bouncin'</span>은 <span class="en">Tinashe</span>의 
        다섯 번째 정규 앨범 333 의 리드 싱글로, 2021년에 발표되었다. 이 곡은 발매 당시 
        평론가들로부터 좋은 평가를 받았으며, <span class="en">Tinashe</span>가 
        독립 아티스트로 활동하면서 구축한 음악적 정체성을 잘 보여주는 작품 중 하나로 꼽힌다.</p>
        <p>
        곡은 현대적인 <span class="en">R&B</span>와 팝 요소를 결합한 사운드를 바탕으로 한다. 
        제목인 <span class="en">'Bouncin'</span>은 말 그대로 튀어 오르거나 움직이는 상태를 의미하며, 
        노래 전체는 자신감과 신체적 에너지, 그리고 움직임의 즐거움을 중심으로 전개된다.
        </p>
        <p>
        가사는 특정한 서사를 따라가기보다 자신의 매력과 존재감을 드러내는 데 집중한다. 
        <span class="en">Tinashe</span>의 보컬은 과도하게 감정적이기보다 여유롭고 자신감 있게 흐르며, 
        곡의 리듬과 퍼포먼스 중심적인 성격을 강화한다.
        </p>
      `
    },


    "forgetmenot": {
      title: "Forget Me Nots",
      artist: "Patrice Rushen - [Forget Me Nots]",
      cover: "./img/album/forgetmenot.jpg",
      audio: "./audio/forgetmenot.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-red",
      tags: ["Spectacle", "sensual"],
      text: `
        <p>
        <span class="en">Forget Me Nots</span>는 <span class="en">Patrice Rushen</span>이 
        1982년에 발표한 곡으로, 앨범 <span class="en">[Straight from the Heart]</span>에 
        수록되어 있다. <span class="en">Patrice Rushen</span>은 재즈 피아니스트이자 작곡가, 
        프로듀서로 활동했으며, 이 곡은 그녀의 가장 유명한 작품으로 남아 있다.</p>
        <p>
        곡은 발매 당시 미국 <span class="en">R&B</span> 차트에서 성공을 거두었으며, 이후 수십 년 동안 수많은 힙합과 <span class="en">R&B</span> 음악에 샘플로 사용되었다. 특히 곡의 베이스 라인은 대중음악 역사상 가장 유명한 베이스 리프 중 하나로 꼽힌다.
        </p>
        <p>
        1980년대 초반 디스코 이후의 댄스 음악과 <span class="en">R&B</span>가 
        어떻게 발전했는지를 보여주는 대표적인 작품 중 하나이며, 오늘날에도 꾸준히 재발견되고 있다.
        </p>
      `
    },


    "getaway": {
      title: "Getaway",
      artist: "Fcukers - [Ö]",
      cover: "./img/album/getaway.jpg",
      audio: "./audio/getaway.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-grey",
      tags: ["Spectacle", "Urban"],
      text: `
        <p>
        <span class="en">Getaway</span>는 뉴욕 기반 일렉트로닉 듀오 
        <span class="en">Fcukers</span>의 곡으로, 2024년 발표된 <span class="en">EP [Ö]</span>에 수록되었다. 
        <span class="en">Fcukers</span>는 <span class="en">Shanny Wise</span>와 
        <span class="en">Jackson Walker Lewis</span>를 
        중심으로 결성되었으며, 하우스, 브레이크비트, 2000년대 클럽 
        음악의 영향을 현대적으로 재해석한 사운드로 주목받고 있다.</p>
        <p>
        <span class="en">Getaway</span>라는 제목처럼 음악은 특정한 목적지보다 이동 자체에 가까운 
        정서를 가진다. 어디론가 떠나고 싶고, 현재의 장소를 벗어나고 싶지만 정확히 어디로 갈지는 
        모르는 상태. 그래서 이 곡의 매력은 해방감과 불안감이 동시에 존재한다는 점에 있다.        </p>
        <p>
        <span class="en">Fcukers</span>의 음악은 종종 2000년대 인디 슬리즈
        <span class="en">(indie sleaze)</span> 문화와 초기 인터넷 시대의 클럽 감성을 떠올리게 하는데, 
        <span class="en">Getaway</span> 역시 그런 복고적 감각과 현대적인 프로덕션이 공존하는 작품이다.
        </p>
      `
    },


    "feelthereal": {
      title: "Feel The Real",
      artist: "Fcukers - [Ö]",
      cover: "./img/album/getaway.jpg",
      audio: "./audio/feelthereal.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-black",
      tags: ["Spectacle", "Urban"],
      text: `
        <p>
        <span class="en">Feel The Real</span>은 뉴욕 기반 듀오 <span class="en">Fcukers</span>의 <span class="en">EP [Ö]</span>에 수록된 곡이다. 
        <span class="en">Fcukers</span>는 하우스, 브레이크비트, 인디 댄스 음악의 영향을 바탕으로 현대적인 클럽 사운드를 
        만들고 있으며, 이 곡 역시 반복적인 리듬과 최면적인 분위기가 중심이 된다.</p>
        <p>
        곡 제목인 <span class="en">"Feel The Real"</span>은 직역하면 "진짜를 느껴라" 정도의 의미를 
        갖지만, 노래는 명확한 메시지를 설명하기보다 감각 자체를 전달하는 데 집중한다. 보컬은 이야기라기보다 리듬의 일부처럼 사용되며, 반복되는 비트와 신시사이저가 곡의 분위기를 이끈다.
        음악적으로는 강한 감정 표현보다는 몰입감이 중요하다. 듣는 사람을 특정한 감정으로 끌고 가기보다, 몸을 움직이게 하고 현재 순간에 집중하게 만드는 종류의 곡에 가깝다. 그래서 이 음악의 매력은 해석보다 체험에 있다.</p>
        <p>
        <span class="en">Feel The Real</span>은 
        <span class="en">Fcukers</span>가 가진 클럽 음악적 감각을 잘 보여주는 작품 중 하나이며, 복고적인 댄스 음악의 영향과 현대적인 프로덕션이 자연스럽게 공존한다.
        </p>
      `
    },


    "fame": {
      title: "Fame",
      artist: "David Bowie - [Young Americans]",
      cover: "./img/album/fame.jpg",
      audio: "./audio/fame.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-red",
      tags: ["Radiant", "Spectacle"],
      text: `
        <p>
        <span class="en">Fame</span>은 <span class="en">David Bowie</span>의 앨범 
        <span class="en">Young Americans</span>에 수록된 곡으로, 1975년 싱글로 발매되었다. 이 곡은 
        <span class="en">Bowie</span>가 미국에서 처음으로 빌보드 싱글 차트 1위에 오른 작품이기도 하다.</p>
        <p>
        곡은 <span class="en">Bowie, John Lennon,</span> 그리고 기타리스트 
        <span class="en">Carlos Alomar</span>이 함께 작곡했다. 특히 
        <span class="en">John Lennon</span>은 코러스와 작곡 과정에 참여했으며, 곡의 유명한 
        <span class="en">"Fame!"</span> 후렴에도 목소리를 남겼다.</p>
        <p>
        음악적으로는 펑크<span class="en">(Funk)</span>의 영향을 강하게 받은 작품이다. 반복적인 기타 리프와 리듬 섹션이 중심이 되며, 당시 
        <span class="en">Bowie</span>가 시도하던 이른바 "플라스틱 소울
        <span class="en">(Plastic Soul)"</span> 시기의 대표곡으로 평가된다.
        </p>
      `
    },

    "youngamericans": {
      title: "Young Americans",
      artist: "David Bowie - [Young Americans]",
      cover: "./img/album/fame.jpg",
      audio: "./audio/youngamericans.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-red",
      tags: ["Spectacle"],
      text: `
        <p>
        <span class="en">Young Americans</span>는 
        <span class="en">David Bowie</span>가 1975년에 발표한 동명의 앨범 
        <span class="en">[Young Americans]</span>의 타이틀곡이다. 당시 
        <span class="en">Bowie</span>는 영국을 떠나 미국에서 생활하며 필라델피아 소울, 
        <span class="en">R&B</span>, 펑크의 영향을 적극적으로 받아들이고 있었고, 이 시기의 음악을 스스로 
        <span class="en">"Plastic Soul"</span>이라고 부르기도 했다.</p>
        <p>
        곡은 미국의 젊은 세대를 다루지만, 단순한 찬가나 비판은 아니다. 가사에는 사랑, 결혼, 소비문화, 정치, 꿈 같은 요소들이 빠르게 스쳐 지나가며, 1970년대 미국 사회의 모습을 파편적으로 보여준다. 
        <span class="en">Bowie</span>는 외부인의 시선으로 미국을 관찰하면서도 동시에 그 문화에 매료되어 있었다.
        미국에 대해 다룬 이 곡은 라스 폰 트리에의 미국 3부작 중 하나인 <span class="en">'Dogville'</span>의 엔딩곡으로 사용된 바 있다.</p>
        <p>
        음악적으로는 이전의 글램 록 시기와 달리 소울 음악의 영향이 강하게 드러난다. 브라스, 코러스, 리드미컬한 리듬이 중심을 이루며, Bowie의 보컬 역시 당시 흑인 음악의 스타일을 적극적으로 흡수하고 있다.
        </p>
      `
    },


    "letsdance": {
      title: "Let's Dance",
      artist: "David Bowie - [Let's Dance]",
      cover: "./img/album/letsdance.jpg",
      audio: "./audio/letsdance.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-orange",
      tags: ["Spectacle"],
      text: `
        <p>
        <span class="en">Let's Dance</span>는 
        <span class="en">David Bowie</span>가 1983년에 발표한 동명의 앨범 
        <span class="en">[Let's Dance]</span>의 타이틀곡이다. 프로듀싱은 
        <span class="en">Nile Rodgers</span>가 맡았으며, 이는 
        <span class="en">Bowie</span>가 이전보다 훨씬 대중적인 팝 사운드에 접근한 시기의 대표작으로 평가된다.</p>
        <p>
        곡은 발매 직후 전 세계적으로 큰 성공을 거두었고, 미국과 영국을 포함한 여러 국가에서 차트 1위에 올랐다. 또한 당시 무명이었던 
        <span class="en">Stevie Ray Vaughan</span>이 기타 연주에 참여한 것으로도 알려져 있다.</p>
        <p>
        제목은 단순히 "춤추자"이지만, 가사는 생각보다 복합적이다. 
        <span class="en">Bowie</span>는 춤을 즐거움의 상징으로 사용하면서도, 불안과 외로움, 현실로부터의 도피 같은 감정도 함께 담아낸다. 그래서 이 곡은 단순한 파티 음악이라기보다, 음악과 움직임을 통해 잠시 현실을 잊고자 하는 욕망을 보여준다.
        </p>
        <p>
        음악적으로는 펑크<span class="en">(Funk)</span>, 댄스 팝, 록이 결합된 사운드를 기반으로 한다. 
        <span class="en">Nile Rodgers</span> 특유의 리듬 기타와 넓게 펼쳐지는 편곡은 곡 전체에 개방감과 에너지를 부여하며, 
        <span class="en">Bowie</span>의 보컬은 그 위를 여유롭게 떠다닌다. 1980년대 초 
        <span class="en">MTV</span> 시대가 본격적으로 시작되던 시기에 발표된 이 곡은 
        <span class="en">Bowie</span>를 새로운 세대의 글로벌 팝 스타로 자리 잡게 만들었다.
        </p>
      `
    },


    "iwannadance": {
      title: "I Wanna Dance With Somebody",
      artist: "Whitney Houston - [Whitney]",
      cover: "./img/album/iwannadance.jpg",
      audio: "./audio/iwannadance.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-blue",
      tags: ["Radiant", "Spectacle"],
      text: `
        <p>
        <span class="en">I Wanna Dance with Somebody (Who Loves Me)</span>는 
        <span class="en">Whitney Houston</span>의 두 번째 정규 앨범 
        <span class="en">[Whitney]</span>의 리드 싱글로 1987년에 발표되었다. 곡은 작곡가 
        <span class="en">George Merrill</span>과 <span class="en">Shannon Rubicam</span>이 만들었으며, 이전에 
        <span class="en">Whitney</span>의 히트곡 
        <span class="en">How Will I Know</span>를 썼던 팀이기도 하다. 
        <p>
        발매 직후 미국, 영국을 비롯한 여러 국가에서 차트 1위에 올랐으며, 오늘날에도 
        <span class="en">Whitney Houston</span>을 대표하는 곡 중 하나로 남아 있다. 겉으로는 밝고 화려한 댄스 팝이지만, 가사는 의외로 외로움과 사랑에 대한 갈망을 이야기한다.
        제목 속 <span class="en">"dance with somebody"</span>는 단순히 춤을 추고 싶다는 뜻이 아니다. 화자는 자신을 진심으로 사랑해 줄 사람을 찾고 있으며, 춤은 그 친밀함과 연결에 대한 은유로 사용된다. 그래서 곡의 핵심 감정은 축제라기보다 동행에 대한 바람에 가깝다.
        <p>
        음악적으로는 1980년대 팝의 전형적인 밝은 신시사이저와 강한 드럼 사운드를 사용하지만, 
        <span class="en">Whitney Houston</span>의 보컬은 그 안에 진심 어린 감정을 담아낸다. 덕분에 이 곡은 신나는 댄스 음악이면서도 동시에 사랑을 기다리는 노래가 될 수 있었다.
        </p>
      `
    },


    "septemberbluemoon": {
      title: "September Blue Moon",
      artist: "Yumi Matsutoya - [Delight Slight Light Kiss]",
      cover: "./img/album/yumi.jpg",
      link: "special-wanting-you.html",
      overlayClass: "overlay-skyblue",
      tags: ["cool"],
      text: `
        <p>
        음원은 다음 링크로 이동하셔서 들을 수 있습니다.
        <span class="en">https://music.apple.com/kr/album/september-blue-moon/1436013165?i=1436013396</span>
        <p>
        <span class="en">September Blue Moon</span>은 
        <span class="en">Yumi Matsutoya</span>의 앨범 [<span class="jp">昨晩お会いしましょう</span>](1981)에 수록된 곡이다. 1970~80년대 일본 팝 음악을 대표하는 싱어송라이터인 마츠토야 유미는 도시적이고 영화적인 서정성으로 많은 사랑을 받았으며, 이 곡 역시 그녀 특유의 계절감과 풍경 묘사가 잘 드러난다.
        <p>
        곡은 제목 그대로 9월의 푸른 달빛을 배경으로 한다. 여름이 완전히 끝나지 않았지만 가을이 시작되고 있는 시기의 공기, 지나간 시간에 대한 감정, 그리고 밤이라는 공간이 만들어내는 분위기가 음악 전체를 감싼다.
        <p>
        음악적으로는 당시 일본 팝 특유의 세련된 편곡과 부드러운 멜로디가 특징이다. 화려한 전개보다는 풍경을 천천히 바라보게 만드는 힘이 있으며, 마츠토야 유미의 보컬 역시 감정을 과하게 밀어붙이지 않고 담담하게 전달한다.
        </p>
      `
    },

    "nobodyelse": {
      title: "Nobody Else",
      artist: "Yumi Matsutoya - [Delight Slight Light Kiss]",
      cover: "./img/album/yumi.jpg",
      audio: "./audio/nobodyelse.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-skyblue",
      tags: ["cool", "Radiant"],
      text: `
        <p>
        <span class="en">Nobody Else</span>는 1980년대 마츠토야 유미의 도시적이며 낭만적인 팝 감각이 잘 드러나는 곡 중 하나다. 사랑을 주제로 하지만, 극적인 고백이나 이별보다는 특정한 한 사람을 향한 집중된 감정을 담고 있다.
        <p>
        마츠토야 유미의 음악에는 종종 자동차, 공항, 도시의 야경, 계절의 변화 같은 현대적 풍경이 등장하는데, 이 곡 역시 그런 도시적 로맨티시즘의 연장선상에서 들을 수 있다. 감정을 직접 설명하기보다 공간과 분위기를 통해 전달하는 방식이 특징이다.
        <p>
        음악적으로는 당시 일본 팝과 <span class="en">AOR</span>의 영향을 보여주며, 부드러운 리듬과 세련된 편곡이 중심을 이룬다. 그래서 이 곡은 열정적인 사랑보다는 오래 바라본 사람에 대한 조용한 확신에 가까운 분위기를 가진다.
        </p>
      `
    },


    "thewayshedances": {
      title: "The Way She Dances",
      artist: "N.E.R.D - [Fly Or Die]",
      cover: "./img/album/thewayshedances.jpg",
      audio: "./audio/thewayshedances.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-pink",
      tags: ["Radiant", "Spectacle"],
      text: `
        <p>
        <span class="en">The Way She Dances</span>는 
        <span class="en">N.E.R.D.</span>의 두 번째 앨범 
        <span class="en">Fly or Die</span>에 수록된 곡이다. 
        <span class="en">N.E.R.D.</span>는 
        <span class="en">Pharrell Williams, Chad Hugo, Shay Haley</span>로 구성된 그룹으로, 록, 힙합, 펑크
        <span class="en">(Funk), R&B</span>를 자유롭게 결합한 음악으로 알려져 있다.
        <p>
        곡은 제목 그대로 한 여성이 춤추는 모습을 바라보는 시선에서 출발한다. 그러나 단순히 외모를 찬양하거나 사랑을 고백하는 방식보다는, 특정한 사람에게서 느껴지는 에너지와 매력에 집중한다. 가사는 상대의 존재감과 움직임이 주는 인상을 반복적으로 강조한다.
        <p>
        음악적으로는 당시 <span class="en">N.E.R.D.</span> 특유의 록과 펑크 기반 리듬이 드러난다. 기타와 드럼이 중심을 이루면서도 
        <span class="en">Pharrell</span>의 멜로디 감각이 살아 있으며, 전형적인 
        <span class="en">R&B</span>나 힙합과는 다른 개방적인 분위기를 만든다.
        <span class="en">[Fly or Die]</span>는 장르 구분을 의도적으로 흐리던 시기의 작품으로 평가받는다. 
        <span class="en">The Way She Dances</span> 역시 댄스 음악이라기보다 움직임과 에너지 자체를 노래하는 곡에 가깝다.
        </p>
      `
    },


    "stay": {
      title: "Stay",
      artist: "Madonna - [Like A Virgin]",
      cover: "./img/album/stay.jpg",
      audio: "./audio/stay.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-purple",
      tags: ["Spectacle"],
      text: `
        <p>
        <span class="en">Stay</span>는 
        <span class="en">Madonna</span>의 데뷔 앨범 
        <span class="en">Madonna</span>에 수록된 곡이다. 이 앨범은 
        <span class="en">Holiday, Borderline</span> 같은 히트곡을 통해 
        <span class="en">Madonna</span>를 세계적인 팝 스타로 성장시키기 시작한 작품으로 평가된다.
        <p>
        <span class="en">Stay</span>는 앨범의 대표 싱글은 아니었지만, 초기 
        <span class="en">Madonna</span> 음악의 특징을 잘 보여준다. 당시 뉴욕 클럽 문화의 영향을 받은 댄스 팝과 포스트 디스코 사운드를 바탕으로 하고 있으며, 가볍고 경쾌한 리듬 위에 사랑에 대한 감정을 담고 있다.
        <p>
        가사의 중심은 제목 그대로 
        <span class="en">"Stay"</span>, 즉 상대가 곁에 머물러 주기를 바라는 마음이다. 그러나 곡은 절망적인 애원이나 비극적인 이별을 이야기하지 않는다. 오히려 상대와 함께 있고 싶은 감정을 밝고 직설적으로 표현한다.
        </p>
      `
    },


    "morningflight": {
      title: "Morning Flight",
      artist: "Takako Mamiya - [LOVE TRIP]",
      cover: "./img/album/morningflight.jpg",
      audio: "./audio/morningflight.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-skyblue",
      tags: ["cool", "Radiant"],
      text: `
        <p>
        <span class="en">Morning Flight</span>는 
        <span class="en">Takako Mamiya</span>의 유일한 정규 앨범 
        <span class="en">LOVE TRIP</span>에 수록된 곡이다. 
        <span class="en">[LOVE TRIP]</span>은 발매 당시 큰 성공을 거두지는 못했지만, 이후 시티팝 재평가 흐름 속에서 세계적으로 알려지며 장르의 대표작 중 하나로 자리 잡았다.
        <p>
        곡 제목인 
        <span class="en">"Morning Flight"</span>는 아침 비행기를 의미한다. 노래는 여행, 이동, 새로운 하루의 시작을 떠올리게 하지만, 단순한 여행송이라기보다 도시적이고 세련된 정서를 담고 있다. 1980년대 일본 팝 특유의 깔끔한 편곡과 부드러운 멜로디가 특징이며, 당시의 
        <span class="en">AOR</span>과 시티팝 감성을 잘 보여준다.
        </p>
      `
    },


    "dekinai": {
      title: '<span class="jp">できない</span>',
      artist: '<span class="jp">ゆらゆら帝国</span> - [<span class="jp">空洞です</span>]',
      cover: "./img/album/dekinai.jpg",
      audio: "./audio/dekinai.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-pink",
      tags: ["Radiant", "cool"],
      text: `
        <p>
    <span class="jp">できない</span><span class="en">(Dekinai)</span>는 일본 밴드
    <span class="jp">ゆらゆら帝国</span><span class="en">(Yura Yura Teikoku)</span>의 앨범
    <span class="jp">[空洞です]</span><span class="en">(kudodesu)</span>에 수록된 곡이다.
        </p>
        <span class="en">Yura Yura Teikoku</span>는 1980년대 후반 결성되어 일본 언더그라운드 록 신에서 독자적인 위치를 차지했으며, 사이키델릭 록과 실험적인 사운드로 알려져 있다.
        </p><p>
        곡 제목인 "<span class="jp">できない</span>"는 일본어로 "할 수 없다"라는 뜻이다. 
        하지만 이 곡은 좌절이나 절망을 직접적으로 표현하기보다, 무언가를 붙잡으려 하지만 명확하게 설명할 수 없는 상태를 담담하게 보여준다.
        </p><p>
        음악적으로는 밴드 특유의 몽환적인 기타와 느긋한 리듬이 중심이 된다. 강한 전개나 극적인 감정보다는 반복과 여백을 통해 분위기를 만들어내며, 듣는 사람을 일종의 부유하는 상태로 이끈다. 그래서 이 곡은 무엇을 말하는지보다 어떤 기분을 남기는지가 더 중요하다.
        2000년대 초반 <span class="en">Yura Yura Teikoku</span>는 일본 인디 록 씬에서 독특한 존재로 평가받았고, <span class="jp">できない</span> 역시 그들의 음악 세계를 잘 보여주는 작품 중 하나로 꼽힌다.
        </p>
      `
    },

    "whycantistop": {
      title: 'Why Cant I Stop',
      artist: 'Shintaro Sakamoto - [Lets Dance Raw]',
      cover: "./img/album/whycantistop.jpg",
      audio: "./audio/whycantistop.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-green",
      tags: ["cool", "Radiant"],
      text: `
        <p>
        <span class="en">Why Can't I Stop</span>은 신타로 사카모토의 앨범 
        <span class="en">Love If Possible</span>에 수록된 곡이다. 사카모토는 일본 사이키델릭 록 밴드 
        <span class="en">Yura Yura Teikoku</span>의 프론트맨으로 활동한 이후 솔로 활동을 시작했으며, 
        록, 소울, 펑크, 라운지 음악을 독특하게 결합한 스타일로 알려져 있다.
        </p><p>
        곡 제목인 <span class="en">"Why Can't I Stop"</span>은 "왜 멈출 수 없는 걸까?" 정도로 해석할 수 있다. 
        하지만 노래는 특정한 사건이나 드라마를 이야기하기보다, 반복적으로 떠오르는 생각이나 습관, 
        혹은 마음속 움직임을 담담하게 바라보는 태도를 보여준다.
        </p><p>
        음악적으로는 느긋한 리듬과 부드러운 그루브가 중심이 된다. 화려한 전개보다는 반복되는 리프와 
        공간감 있는 편곡이 중요하며, 사카모토의 무심한 보컬은 곡 전체에 독특한 부유감을 만든다.
        </p><p>
        그의 솔로 음악은 종종 도시의 일상과 개인의 내면을 관찰하는 듯한 분위기를 갖는데, 
        <span class="en">Why Can't I Stop</span> 역시 어떤 결론에 도달하기보다 생각이 계속 이어지는 상태를 포착한다.
        </p>
      `
    },


    "diamondhead": {
      title: 'Diamond Head (Welome Back Ver.)',
      artist: 'PLASTICS - [Welcome Back]',
      cover: "./img/album/diamondhead.jpg",
      audio: "./audio/diamondhead.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-blue",
      tags: ["radiant", "cool"],
      text: `
        <p>
        <span class="en">Diamond Head</span>는 일본 뉴웨이브 밴드 
        <span class="en">Plastics</span>의 앨범 
        <span class="en">Welcome Plastics</span>에 수록된 곡이다. 
        <span class="en">Plastics</span>는 1970년대 후반 결성되어 
        일본 뉴웨이브와 신스팝의 선구자로 평가받으며, 영국의 뉴웨이브 씬에서도 주목받았다.
        </p><p>
        당시 멤버였던 <span class="en">Toshio Nakanishi</span>와 
        <span class="en">Chica Sato</span>를 중심으로, 
        <span class="en">Plastics</span>는 펑크 이후 등장한 뉴웨이브의 
        미니멀함과 실험성을 일본식 감각으로 재해석했다.
        </p><p>
        <span class="en">Diamond Head</span>는 밴드 특유의 기계적이면서도 유머러스한 
        리듬이 돋보이는 곡이다. 신디사이저와 반복적인 기타 리프, 절제된 보컬이 중심을 이루며, 
        감정을 폭발시키기보다 표면 위를 가볍게 미끄러지는 듯한 인상을 남긴다.
        </p><p>
        곡 제목은 하와이 오아후섬의 화산 분화구인 
        <span class="en">Diamond Head</span>를 가리키지만, 노래는 특정 장소를 사실적으로 
        묘사하기보다 하나의 이미지와 분위기를 만들어낸다. 그래서 이 곡의 매력은 이야기보다 
        디자인에 가깝다.
        1980년대 초 <span class="en">Plastics</span>는 일본과 해외를 오가며 활동했고, 
        그들의 음악은 훗날 시부야계와 일본 인디팝에도 적지 않은 영향을 남겼다. 
        <span class="en">Diamond Head</span> 역시 그 시대의 국제적이고 미래지향적인 
        감각을 잘 보여주는 작품 중 하나다.
        </p>
      `
    },


    "theremust": {
      title: 'There Must Be An Angel (Playing With My Heart)',
      artist: 'Sign Libra',
      cover: "./img/album/theremust.jpg",
      audio: "./audio/theremust.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-skyblue",
      tags: ["comforting", "urban", "melancholy"],
      text: `
        <p>
        <span class="en">There Must Be an Angel (Playing With My Heart)</span>는 
        라트비아 출신 아티스트 <span class="en">Sign Libra</span>가 2022년에 발표한 싱글이다. 이 곡은 
        <span class="en">Eurythmics</span>의 동명곡을 새롭게 해석한 커버 버전으로, 원곡의 팝적 에너지를 유지하기보다 몽환적이고 부유하는 분위기로 재구성하였다.
        </p><p>
        <span class="en">Sign Libra</span>는 앰비언트, 뉴에이지, 신스팝을 결합한 음악으로 알려져 있으며, 보컬보다 공간감과 분위기를 중요하게 다루는 아티스트다. 그녀의 음악은 종종 명확한 서사보다 감각과 풍경을 전달하는 데 집중한다.
        </p><p>
        <span class="en">Diamond Head</span>는 밴드 특유의 기계적이면서도 유머러스한 
        리듬이 돋보이는 곡이다. 신디사이저와 반복적인 기타 리프, 절제된 보컬이 중심을 이루며, 
        감정을 폭발시키기보다 표면 위를 가볍게 미끄러지는 듯한 인상을 남긴다.
        </p><p>
        원곡의 가사는 사랑에 빠진 황홀한 상태를 묘사한다. 
        <span class="en">"There must be an angel playing with my heart"</span>라는 문장은, 설명할 수 없는 행복과 설렘을 천사의 장난에 비유한다. 
        <span class="en">Sign Libra</span>의 버전은 이러한 감정을 더욱 느리고 흐릿한 방식으로 표현하며, 현실이라기보다 꿈이나 기억에 가까운 인상을 남긴다.
        </p>
      `
    },



    "objectofmydesire": {
      title: 'Object Of My Desire',
      artist: 'Startpoint - [Restless]',
      cover: "./img/album/objectofmydesire.jpg",
      audio: "./audio/objectofmydesire.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-blue",
      tags: ["Radiant", "Spectacle"],
      text: `
        <p>
        <span class="en">Object of My Desire</span>는 미국 
        <span class="en">R&B</span> 그룹 
        <span class="en">Starpoint</span>가 1985년에 발표한 곡으로, 
        앨범 <span class="en">[Restless]</span>에 수록되었다. 이 곡은 
        <span class="en">Starpoint</span>의 가장 유명한 히트곡 중 하나이며, 
        1980년대 중반 <span class="en">R&B</span>와 댄스 음악을 대표하는 작품으로 남아 있다.
        </p><p>
        제목인 <span class="en">"Object of My Desire"</span>는 직역하면 "내 욕망의 대상" 정도의 의미다. 가사는 상대를 
        한 강한 끌림과 애정을 이야기하며, 전형적인 1980년대 <span class="en">R&B</span>의 로맨틱한 정서를 담고 있다.
        </p><p>
        음악적으로는 신시사이저, 드럼 머신, 펑키한 베이스 라인이 중심을 이루며, 당시 미국 <span class="en">R&B</span> 특유의 
        세련된 프로덕션이 잘 드러난다. 특히 <span class="en">Renée Diggs</span>의 보컬은 자신감 있고 힘이 있으며, 곡 전체에 
        활기찬 에너지를 부여한다.
        </p><p>
        원곡의 가사는 사랑에 빠진 황홀한 상태를 묘사한다. 
        1980년대 중반은 댄스 팝과 <span class="en">R&B</span>가 점점 가까워지던 시기였고, 
        <span class="en">Object of My Desire</span>는 그 
        흐름을 대표하는 곡 중 하나로 평가받는다. 사랑을 이야기하지만 우울하거나 진지하기보다 밝고 개방적인 
        분위기를 유지한다.
        </p>
      `
    },

    "oblivion": {
      title: 'Oblivion',
      artist: 'Grimes - [Visions]',
      cover: "./img/album/oblivion.jpg",
      audio: "./audio/oblivion.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-black",
      tags: ["melancholy", "Spectacle"],
      text: `
        <p>
        <span class="en">Oblivion</span>은 
        <span class="en">Grimes</span>의 세 번째 정규 앨범 
        <span class="en">[Visions]</span>에 수록된 곡이다. [Visions]</span>는 
        <span class="en">Grimes</span>를 세계적으로 알린 작품으로, 신스팝, 전자음악, 드림팝을 독창적으로 결합한 앨범으로 평가받는다.
        </p><p>
        곡은 밝고 경쾌하게 들리지만, 가사는 훨씬 복잡한 주제를 다룬다. 
        <span class="en">Grimes</span>는 여러 인터뷰에서 이 곡이 자신이 겪었던 폭력 경험 이후의 감정과 관련되어 있다고 설명한 바 있다. 그러나 노래는 공포나 분노를 직접적으로 표현하기보다, 불안과 경계를 특유의 가볍고 몽환적인 사운드 속에 담아낸다.
        </p><p>
        음악적으로는 반복적인 신스 멜로디와 가벼운 비트가 중심이 된다. 보컬은 명확한 전달보다는 하나의 질감처럼 사용되며, 곡 전체에는 현실과 비현실 사이를 떠다니는 듯한 분위기가 있다.
        </p><p>
        뮤직비디오 역시 독특한데, 일반적인 팝 스타의 이미지 대신 스포츠 경기장과 남성 중심 공간을 배경으로 촬영되었다. 이는 곡이 가진 긴장감과 주제를 시각적으로 보여주는 요소로 자주 언급된다.
        </p>
      `
    },


    "blackcat": {
      title: 'Black Cat',
      artist: 'The Broadcast - [Tender Buttons]',
      cover: "./img/album/blackcat.jpg",
      audio: "./audio/blackcat.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-black",
      tags: ["melancholy", "urban"],
      text: `
        <p>
        <span class="en">Black Cat</span>은 <span class="en">Broadcast</span>의 앨범 
        <span class="en">[Tender Buttons]</span>에 수록된 곡이다. 
        <span class="en">Broadcast</span>는 영국 버밍엄 출신 밴드로, 1960년대 전자음악, 라이브러리 뮤직, 사이키델릭 팝의 영향을 현대적으로 재해석한 독창적인 사운드로 알려져 있다.
        </p><p>
        <span class="en">Black Cat</span>은 앨범 
        <span class="en">[Tender Buttons]</span>를 대표하는 곡 중 하나로, 단순한 팝송의 구조를 유지하면서도 묘한 긴장감과 불안감을 품고 있다. 반복되는 전자음과 간결한 리듬, 그리고 
        <span class="en">Trish Keenan</span>의 차분한 보컬이 결합되어 현실과 꿈 사이 어딘가에 있는 듯한 분위기를 만든다.
        </p><p>
        제목의 "검은 고양이"는 전통적으로 미신과 불길함, 혹은 신비로움을 상징하지만, 곡은 이를 명확한 이야기로 설명하지 않는다. 
        <span class="en">Broadcast</span>의 음악은 종종 의미를 직접 전달하기보다 이미지와 감각을 통해 접근하며, 
        <span class="en">Black Cat</span> 역시 어떤 장면을 떠올리게 하는 방식으로 작동한다.
        </p><p>
        <span class="en">[Tender Buttons]</span>가 발표된 시기의 <span class="en">Broadcast</span>는 보다 미니멀하고 실험적인 방향으로 나아가고 있었으며, 이 곡은 그 변화를 잘 보여주는 작품 중 하나로 평가된다.
        </p>
      `
    },


    "reality": {
      title: 'REALiTi (Demo)',
      artist: 'Grimes',
      cover: "./img/album/reality.jpg",
      audio: "./audio/reality.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-purple",
      tags: ["Spectacle", "urban"],
      text: `
        <p>
        <span class="en">REALiTi</span>는 <span class="en">Grimes</span>가 2015년에 공개한 곡이다. 원래는 
        <span class="en">[Art Angels]</span> 작업 과정에서 만들어졌지만 정규 앨범에는 수록되지 않았고, 이후 새로운 버전이 
        <span class="en">[Art Angels]</span> 디럭스 에디션에 포함되었다. 특히 팬들 사이에서는 먼저 공개된 
        <span class="en">REALiTi (Demo)</span> 버전이 가장 널리 사랑받고 있다.
        </p><p>
        곡은 <span class="en">Grimes</span>가 아시아 투어를 마친 뒤 느낀 감정에서 출발한 것으로 알려져 있다. 당시 그녀는 인터뷰에서 이 곡이 투어 중 경험했던 자유와 변화, 그리고 그 시간이 끝난 뒤의 감정을 담고 있다고 설명했다.
        </p><p>
        음악적으로는 밝은 신스 멜로디와 경쾌한 리듬이 중심이 되지만, 가사에는 지나간 시간에 대한 아쉬움과 회상이 담겨 있다. 그래서 곡은 슬프지 않지만 어딘가 그리운 기분을 남긴다. 기쁨과 상실감이 동시에 존재하는 것이 이 노래의 가장 큰 특징이다.
        </p><p>
        제목인 "<span class="en">REALiTi</span>"는 "<span class="en">Reality</span>(현실)"를 변형한 표현이다. 현실과 기억, 현재와 과거 사이의 거리감을 암시하는 제목으로 자주 해석된다.
        </p>
      `
    },


    "shower": {
      title: 'Shower Scene',
      artist: 'Saint Etienne - [Finisterre]',
      cover: "./img/album/shower.jpg",
      audio: "./audio/shower.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-grey",
      tags: ["Spectacle", "urban"],
      text: `
        <p>
        <span class="en">Shower Scene</span>은 <span class="en">Saint Etienne</span>의 앨범 <span class="en">[Finisterre]</span>에 수록된 곡이다. 
        <span class="en">[Finisterre]</span>는 런던이라는 도시를 주제로 한 앨범으로 알려져 있으며, 도시의 거리, 사람들, 풍경, 그리고 일상의 순간들을 다양한 방식으로 담아낸 작품이다.
        </p><p>
        <span class="en">Saint Etienne</span>는 1990년대부터 영국 팝, 하우스, 일렉트로닉 음악을 결합하며 독특한 스타일을 구축해 왔고, 이 곡 역시 그들의 부드럽고 서정적인 면모를 보여준다.
        </p><p>
        곡 제목인 <span class="en">"Shower Scene"</span>은 영화나 소설에서 자주 등장하는 장면을 떠올리게 하지만, 노래는 특정한 사건을 극적으로 묘사하지 않는다. 오히려 어떤 기억의 한 조각, 스쳐 지나가는 순간의 분위기에 집중한다.
        </p><p>
        음악적으로는 차분한 비트와 부유하는 신시사이저, <span class="en">Sarah Cracknell</span>의 담담한 보컬이 중심을 이룬다. 강한 감정 표현보다는 풍경을 바라보듯 흘러가는 분위기가 특징이며, 
        <span class="en">Saint Etienne</span> 특유의 도시적 감성이 잘 드러난다.
        </p>
      `
    },

    "hyperstellar": {
      title: 'Supernova (Grimes Remix)',
      artist: 'Aespa - [iScreaM Vol.33 : Supernova / Armageddon Remixes - EP]',
      cover: "./img/album/hyperstellar.jpg",
      audio: "./audio/hyperstellar.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-pink",
      tags: ["Spectacle", "urban"],
      text: `
        <p>
        <span class="en">Supernova (Grimes Remix)</span>는 
        <span class="en">aespa</span>의 <span class="en">Supernova</span>를 
        <span class="en">Grimes</span>가 리믹스한 버전으로, 2024년 리믹스 프로젝트를 통해 공개되었다.
        </p><p>
        원곡 <span class="en">Supernova</span>가 강한 베이스와 직선적인 에너지를 중심으로 전개된다면, 
        <span class="en">Grimes</span>의 리믹스는 여기에 보다 몽환적이고 미래적인 전자음향을 추가한다. 그녀 특유의 신스 텍스처와 공간감이 더해지면서, 원곡의 공격적인 에너지가 조금 더 부유하고 환상적인 방향으로 변형된다.
        </p><p>
        <span class="en">Grimes</span>는 오랫동안 <span class="en">SF</span>적 상상력, 디지털 문화, 미래주의적 미학을 음악에 반영해 온 아티스트로 알려져 있으며, 이 리믹스 역시 그런 특징이 드러난다. 원곡의 "초신성" 이미지를 더욱 비현실적이고 우주적인 분위기로 확장하는 방식에 가깝다.
        </p>
      `
    },


    "dancingmachine": {
      title: 'Dancing Machine',
      artist: 'Jackson 5 - [Dancing Machine]',
      cover: "./img/album/dancingmachine.jpg",
      audio: "./audio/dancingmachine.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-orange",
      tags: ["Spectacle", "sensual"],
      text: `
        <p>
        <span class="en">Dancing Machine</span>은 
        <span class="en">Jackson 5</span>가 1974년에 발표한 곡으로, 앨범 
        <span class="en">[Dancing Machine]</span>에 수록되었다. 발매 당시 미국 차트 상위권에 오르며 큰 성공을 거두었고, 오늘날에도 
        <span class="en">Jackson 5</span>를 대표하는 히트곡 가운데 하나로 남아 있다.
        </p><p>
        곡은 제목 그대로 춤을 주제로 한다. 가사 속 화자는 춤을 추는 한 여성을 "댄싱 머신"이라고 부르며 그녀의 움직임과 에너지에 감탄한다. 노래는 복잡한 이야기보다는 춤이 만들어내는 즐거움과 매력을 중심에 둔다.
        </p><p>
        음악적으로는 1970년대 펑크<span class="en">(Funk)</span>와 소울의 영향을 강하게 보여준다. 탄탄한 리듬 섹션과 반복적인 그루브가 곡을 이끌며, 어린 
        <span class="en">Michael Jackson</span>의 활기찬 보컬이 곡 전체에 생동감을 더한다.
        </p>
      `
    },


    "sunshine": {
      title: 'You Are the Sunshine of My Life',
      artist: 'Stevie Wonder - [Talking Book]',
      cover: "./img/album/sunshine.jpg",
      audio: "./audio/sunshine.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-red",
      tags: ["Sensual", "cool", "Radiant"],
      text: `
        <p>
        <span class="en">You Are the Sunshine of My Life</span>는 <span class="en">Stevie Wonder</span>의 앨범 
        <span class="en">[Talking Book]</span>에 수록된 곡으로, 1973년 싱글로 발매되어 미국 빌보드 차트 1위에 올랐다. 이 곡은 
        <span class="en">Stevie Wonder</span>에게 첫 번째 그래미상을 안겨준 대표작 중 하나이기도 하다.
        </p><p>
        제목은 직역하면 "당신은 내 삶의 햇살이다"라는 뜻이다. 가사는 복잡한 은유나 극적인 서사 없이, 사랑하는 사람이 자신의 삶에 얼마나 큰 의미를 갖는지를 솔직하게 이야기한다.
        </p><p>
        음악적으로는 소울, 팝, 재즈의 요소가 자연스럽게 섞여 있으며, <span class="en">Stevie Wonder</span> 특유의 따뜻한 멜로디 감각이 잘 드러난다. 곡의 시작 부분에서는 
        <span class="en">Stevie Wonder</span>가 아닌 다른 보컬이 먼저 노래를 시작하는데, 이는 당시로서는 비교적 독특한 구성으로 알려져 있다.
        </p><p>
        1970년대 <span class="en">Stevie Wonder</span>는 사회적 메시지를 담은 곡과 개인적인 사랑 노래를 모두 뛰어나게 만들어냈는데, 
        <span class="en">You Are the Sunshine of My Life</span>는 그중에서도 가장 순수하고 낙관적인 사랑 노래로 자주 언급된다.
        </p>
      `
    },

    "letsstaytogether": {
      title: 'Lets Stay Together',
      artist: 'Al Green - [Lets Stay Together]',
      cover: "./img/album/letsstaytogether.jpg",
      audio: "./audio/letsstaytogether.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-pink",
      tags: ["Sensual"],
      text: `
        <p>
        <span class="en">Let's Stay Together</span>는 
        <span class="en">Al Green</span>의 동명 앨범 
        <span class="en">[Let's Stay Together]</span>의 타이틀곡으로, 1971년 발표되었다. 이 곡은 
        <span class="en">Al Green</span>의 첫 번째 미국 빌보드 1위 싱글이 되었으며, 오늘날에도 소울 음악 역사상 가장 위대한 사랑 노래 중 하나로 평가받는다.
        </p><p>
        가사는 제목 그대로 "우리 함께 있자"는 내용을 담고 있다. 그러나 곡은 사랑에 빠지는 순간이나 이별의 아픔을 이야기하지 않고
        "좋을 때도, 나쁠 때도 함께하자."라는 매우 단순한 약속을 노래한다.
        </p><p>
        음악적으로는 멤피스 소울<span class="en">(Memphis Soul)</span>의 대표적인 특징을 보여준다. 부드러운 오르간, 절제된 리듬, 그리고 
        <span class="en">Al Green</span> 특유의 따뜻하고 섬세한 보컬이 중심을 이룬다.
        </p>
      `
    },

    "unknowingly": {
      title: '<span class="kr">나도 몰래</span>',
      artist: '<span class="kr">김정미</span> - [NOW]',
      cover: "./img/album/unknowingly.jpg",
      audio: "./audio/unknowingly.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-skyblue",
      tags: ["cool"],
      text: `
        <p>
        나도 몰래는 김정미의 앨범 <span class="en">[NOW]</span>에 수록된 곡이다. 김정미는 1970년대 한국 사이키델릭 록과 포크 음악을 대표하는 가수로, 작곡가 신중현과 함께 여러 작품을 발표했다.
        </p><p>
        이 시기 김정미의 음악은 한국 전통 선율, 사이키델릭 록, 포크, 소울의 요소가 독특하게 결합되어 있었으며, 
        <span class="en">[NOW]</span>는 오늘날 한국 대중음악의 명반으로 자주 언급된다.
        </p><p>
        나도 몰래는 제목 그대로 "나도 모르는 사이에" 찾아온 감정을 노래한다. 노래는 사랑을 직접 설명하기보다, 자신도 알아차리지 못한 채 마음이 움직여 버린 상태를 담담하게 묘사한다.
        </p><p>
        음악적으로는 신중현 특유의 몽환적인 기타와 여백이 많은 편곡이 특징이다. 김정미의 보컬은 힘 있게 밀어붙이기보다 부드럽고 자연스럽게 흐르며, 곡 전체에 꿈을 꾸는 듯한 분위기를 만든다.
        </p>
      `
    },

    "remindme": {
      title: 'Remind Me',
      artist: 'Schiller Street Gang - [Eccentric Soul: Twinights Lunar Rotation]',
      cover: "./img/album/remindme.jpg",
      audio: "./audio/remindme.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-purple",
      tags: ["Radiant"],
      text: `
        <p>
        <span class="en">Remind Me</span>는 1970년대 후반에 발표된 소울/디스코 계열의 곡으로 알려져 있다. 
        당시의 부드러운 디스코와 소울 사운드를 따르며, 반복적인 그루브와 따뜻한 멜로디가 중심이 된다. 
        곡 제목이 암시하듯 기억과 관계, 그리고 누군가를 떠올리는 감정이 핵심 정서로 느껴진다.
        </p>
      `
    },

    "lady": {
      title: 'Lady Of The Year',
      artist: 'Whillie Wright - [Telling The Truth]',
      cover: "./img/album/lady.jpg",
      audio: "./audio/lady.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-grey",
      tags: ["melancholy", "comforting"],
      text: `
        <p>
        <span class="en">Lady of the Year</span>는 미국 멤피스 출신의 싱어송라이터 
        <span class="en">Willie Wright</span>의 앨범 <span class="en">[Telling the Truth]</span>에 수록된 곡이다. 
        <span class="en">Willie Wright</span>는 1970년대에 활동했지만 대중적으로 널리 알려지지는 않았고, 
        <span class="en">[Telling the Truth]</span> 역시 오랫동안 희귀 음반으로 남아 있었다. 이후 희귀 소울과 포크 음악을 재조명하는 과정에서 다시 주목받게 되었다.
        </p><p>
        곡은 제목 그대로 한 여성을 향한 애정과 존경을 표현한다. 
        <span class="en">Willie Wright</span> 특유의 소박한 어쿠스틱 사운드와 부드러운 보컬이 중심이 되며, 화려한 편곡보다는 진솔한 분위기가 강조된다.
        </p><p>
        이 곡의 가장 큰 특징은 과장이 없다는 점이다. 거대한 사랑보다 가까운 사람에게 건네는 따뜻한 말처럼 들린다.
        </p>
      `
    },

    "rockman": {
      title: 'Rockman',
      artist: 'MK.gee',
      cover: "./img/album/rockman.jpg",
      audio: "./audio/rockman.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-brown",
      tags: ["Spectacle"],
      text: `
        <p>
        <span class="en">ROCKMAN</span>은 <span class="en">Mk.gee</span>가 2024년 발표한 싱글이다. 이 곡은 그의 데뷔 앨범 이후 공개된 독립 싱글로, 
        발매 후 처음으로 여러 미국 라디오 차트에 진입하며 주목을 받았다.
        </p><p>
        <span class="en">Mk.gee</span>는 <span class="en">R&B</span>, 소프트 록, 사이키델리아, 팝을 독특하게 섞는 음악으로 알려져 있으며, 
        <span class="en">ROCKMAN</span>에서는 특히 1970~80년대 록의 이미지와 에너지를 적극적으로 차용한다. 
        <span class="en">Pitchfork</span>는 이 곡을 "록앤롤 주크박스 뮤지컬"에 비유하며, 가사와 제목 곳곳에서 
        <span class="en">Elton John, Bruce Springsteen, Michael Hutchence</span> 같은 록스타들의 흔적을 발견할 수 있다고 
        했다.</p><p>
        음악적으로는 <span class="en">Mk.gee</span> 특유의 흐릿한 기타 톤과 디지털적인 질감이 유지되지만, 이전 작품보다 훨씬 직선적이고 추진력이 강하다. 동시에 과거 록 음악에 대한 오마주와 현대적인 프로덕션이 공존한다는 점이 특징이다. 여러 청취자들은 이 곡에서 
        <span class="en">The Police</span>나 1980년대 팝 록의 분위기를 떠올리기도 했다
        </p>
      `
    },

    "ef": {
      title: 'EF',
      artist: 'Chanel Beads',
      cover: "./img/album/ef.jpg",
      audio: "./audio/ef.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-pink",
      tags: ["Spectacle"],
      text: `
        <p>
        <span class="en">Ef</span>는 <span class="en">Chanel Beads</span>가 2022년 발표한 싱글이다. 이 프로젝트는 뉴욕 기반의 뮤지션 
        <span class="en">Shane Lavers</span>를 중심으로 만들어졌으며, 앰비언트 전자음악, 인디 팝, 필드 레코딩을 창의적으로 결합하는 것으로 알려져 있다.
        </p><p>
        곡은 단순한 팝 구조를 따르기보다 기억의 파편처럼 흘러간다. 흐릿한 신시사이저와 부유하는 보컬이 중심을 이루며, 명확한 서사보다 감정의 인상을 남긴다. 
        <span class="en">Chanel Beads</span>는 자신의 음악을 설명하기 어려운 상태, 기억과 감정이 섞여 있는 상태에 가깝게 만들고자 한다고 이야기한 바 있다.</p><p>
        <span class="en">Ef</span>는 이후 <span class="en">Chanel Beads</span>의 대표곡 중 하나가 되었으며, 이후 발표된 작품들로 이어지는 음악적 방향을 보여주는 초기 작품으로 자주 언급된다.
        </p>
      `
    },

    "jungleflower": {
      title: 'Jungle Flower',
      artist: '<span class="jp">ウォーターメロングループ</span> - [Cool Music]',
      cover: "./img/album/jungleflower.jpg",
      audio: "./audio/jungleflower.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-skyblue",
      tags: ["cool"],
      text: `
        <p>
        <span class="en">Jungle Flower</span>는 일본 그룹 <span class="jp">ウォーターメロングループ</span><span class="en">(Water Melon Group)</span>의 곡으로, 1970~80년대 일본의 재즈, 펑크, 소울, 라틴 음악이 혼합된 분위기를 보여준다. 
        <span class="en">Water Melon Group</span>은 이후 희귀 일본 음악을 수집하는 <span class="en">DJ</span>들과 레코드 컬렉터들 사이에서 재조명되며 컬트적인 인지도를 얻게 되었다.
        </p><p>
        곡은 화려한 연주와 리드미컬한 그루브가 중심이 되며, 강한 서사보다는 움직임과 분위기를 만드는 데 집중한다. 재즈와 펑크의 요소가 자연스럽게 섞여 있으며, 당시 일본 크로스오버 사운드의 특징을 엿볼 수 있다.
        </p>
      `
    },


    "patterns": {
      title: 'Patterns',
      artist: 'Suse Millemann',
      cover: "./img/album/patterns.jpg",
      audio: "./audio/patterns.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-grey",
      tags: ["melancholy", "urban"],
      text: `
        <p>
        <span class="en">Patterns</span>는 시카고 출신의 
        <span class="en">Suse Millemann</span>이 남긴 곡으로, 1980년대에 녹음된 작품이 이후 
        <span class="en">Numero Group</span>의 재발매 프로젝트를 통해 다시 알려졌다.
        </p><p>
        곡은 화려한 전개보다 부드럽게 반복되는 리듬과 신시사이저의 질감에 집중한다. 1980년대 드림팝, 뉴웨이브, 소프트 신스팝의 분위기를 공유하면서도 지나치게 차갑거나 미래적으로 들리지 않는다. 오히려 희미한 기억처럼 흐르는 정서가 중심에 있다.
        </p>
      `
    },

    "images": {
      title: 'Images',
      artist: 'Mikey Enwright',
      cover: "./img/album/images.jpg",
      link: "special-wanting-you.html",
      overlayClass: "overlay-grey",
      tags: ["melancholy", "urban"],
      text: `
        <p>
        음원은 다음 링크로 이동하셔서 들을 수 있습니다.
        <span class="en">https://music.apple.com/kr/album/images/1693162555?i=1693162556</span>
        </p><p>
        <span class="en">Images</span>는 영국의 독립 전자음악가 
        <span class="en">Mikey Enwright</span>가 2023년 발표한 싱글이다. 현재 공개된 자료는 많지 않으며, 곡의 제작 배경에 대한 상세한 인터뷰 역시 확인되지 않는다.
        </p><p>
        곡은 몽환적인 전자음과 흐릿한 보컬 레이어를 중심으로 전개된다. 명확한 서사보다는 제목처럼 이미지와 인상의 흐름에 가까운 구성을 보여준다.
        </p>
      `
    },

     "chokeenough": {
      title: 'Choke Enough',
      artist: 'Oklou - [Choke Enough]',
      cover: "./img/album/chokeenough.jpg",
      audio: "./audio/chokeenough.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-grey",
      tags: ["urban"],
      text: `
        <p>
        <span class="en">Choke Enough</span>는 <span class="en">Oklou</span>의 데뷔 앨범 
        <span class="en">[Choke Enough]</span>의 타이틀곡이다. 
        <span class="en">Oklou</span>는 프랑스 출신의 프로듀서이자 싱어송라이터 
        <span class="en">Marylou Mayniel</span>의 프로젝트로, 클래식 음악 교육을 받은 뒤 전자음악과 하이퍼팝 신에서 독자적인 위치를 구축했다. 이 앨범은 약 2년 반에 걸쳐 제작되었으며, 
        <span class="en">Oklou</span>는 이를 "의미를 찾는 탐색"에 관한 작품이라고 설명했다.
        </p><p>
        곡은 전통적인 팝 구조보다 분위기와 변형에 집중한다. 신스 사운드는 끊임없이 형태를 바꾸며 흐르고, 보컬은 선명한 메시지보다 감정의 흔적처럼 떠오른다. 평론가들은 이 작품을 
        <span class="en">Y2K</span> 팝, 중세 선율, 앰비언트 전자음악이 결합된 독특한 세계로 평가했다.
        </p>
      `
    },

    "newyorkgrief": {
      title: 'New York Grief',
      artist: 'Princess Demeny',
      cover: "./img/album/newyorkgrief.jpg",
      audio: "./audio/newyorkgrief.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-grey",
      tags: ["melancholy"],
      text: `
        <p>
        <span class="en">New York Grief</span>는 몬트리올의 시인, 화가, 영화감독이자 음악가인 
        <span class="en">Princess Demeny</span>가 1986년에 만든 곡이다. 그녀는 당시 연인이었던 
        <span class="en">Jean Mineau</span>와 함께 작업했지만, 그는 곡 작업 직후 말기 암 진단을 받고 세상을 떠났다. 이 곡은 오랫동안 발표되지 못하다가 2021년에 정식 재발매되었다.
        </p><p>
        <span class="en">Princess Demeny</span>는 이 곡이 1980년대 중반 여러 차례 방문했던 뉴욕에서 영감을 받았다고 밝혔다. 그녀는 밤새 깨어 있으면서 뉴욕의 밤거리와 사람들을 관찰했고, 밤의 인물들이 사라지면 다시 직장인들이 도시를 채우는 모습을 보며 독특한 감정을 느꼈다고 회상했다. 그녀는 "뉴욕에서는 밤보다 낮에 더 많은 어둠이 있는 것 같았다"고 말하기도 했다.
        </p>
      `
    },

    "urbanclearway": {
      title: 'Urban Clearway',
      artist: 'Saint Etienne - [Tiger Bay]',
      cover: "./img/album/urbanclearway.jpg",
      audio: "./audio/urbanclearway.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-green",
      tags: ["urban", "Spectacle"],
      text: `
        <p>
        <span class="en">Urban Clearway</span>는 <span class="en">Saint Etienne</span>의 세 번째 앨범 
        <span class="en">Tiger Bay</span>의 오프닝 트랙이다. 1994년에 발표된 
        <span class="en">[Tiger Bay]</span>는 포크, 댄스, 전자음악, 팝을 자유롭게 넘나드는 작품으로 평가받으며, 
        <span class="en">Saint Etienne</span>의 대표작 중 하나로 꼽힌다.
        </p><p>
        이 곡은 앨범의 첫 곡이지만 보컬이 없는 인스트루멘털이다. 
        <span class="en">Saint Etienne</span> 특유의 신스 사운드와 댄스 비트가 중심을 이루며, 이후 펼쳐질 
        <span class="en">[Tiger Bay]</span>의 세계를 여는 역할을 한다. <span class="en">Pitchfork</span>는 이 곡을 "미래적인 광택
        <span class="en">(futuristic sheen)"을 가진 오프닝으로 묘사했고, <span class="en">Apple Music</span>은 "디스코 위에 바로크 팝 멜로디를 얹은 곡"이라고 소개했다.
        </p><p>
        곡 제목의 <span class="en">"Urban Clearway"</span>는 영국 도로 표지판에서 볼 수 있는 용어로, 특정 시간대에 정차가 금지되는 도로 구간을 의미한다. 그래서인지 이 음악은 어떤 장소의 이야기라기보다, 도시를 가로지르는 움직임과 속도를 떠올리게 한다.
        </p>
      `
    },

    "winternow": {
      title: 'Winter Now',
      artist: 'The Broadcast - [Haha Sound]',
      cover: "./img/album/winternow.jpg",
      audio: "./audio/winternow.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-grey",
      tags: ["urban", "melancholy"],
      text: `
        <p>
        <span class="en">Winter Now</span>는 <span class="en">Broadcast</span>의 앨범 
        <span class="en">Haha Sound</span>에 수록된 곡이다. 
        <span class="en">Broadcast</span>가 보다 미니멀하고 실험적인 방향으로 나아간 시기의 작품으로, 전자음악과 팝, 라이브러리 뮤직의 영향이 독특하게 섞여 있다.
        </p><p>
        곡은 짧고 단순한 구조를 가지고 있지만, <span class="en">Broadcast</span> 특유의 분위기가 강하게 드러난다. 반복되는 전자음과 
        <span class="en">Trish Keenan</span>의 차분한 보컬은 명확한 이야기를 전달하기보다 하나의 풍경을 만들어낸다.
        </p><p>
        제목의 <span class="en">"Winter Now"</span>는 특정한 사건보다 계절이 주는 감각 자체를 암시한다. 겨울은 이 곡에서 차갑거나 극적인 이미지가 아니라, 모든 소리가 조금 멀어지고 흐려진 상태처럼 표현된다.
        </p>
      `
    },

    "spring": {
      title: 'Spring',
      artist: 'Saint Etienne - [Foxbase Alpha]',
      cover: "./img/album/spring.jpg",
      audio: "./audio/spring.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-green",
      tags: ["urban", "melancholy", "Spectacle"],
      text: `
        <p>
        <span class="en">Spring</span>은 <span class="en">Saint Etienne</span>의 데뷔 앨범 
        <span class="en">Foxbase Alpha</span>에 수록된 곡이다. 
        <span class="en">[Foxbase Alpha]</span>는 하우스, 인디 팝, 댄스 음악을 결합한 작품으로, 1990년대 영국 인디 팝을 대표하는 앨범 중 하나로 평가받는다.
        </p><p>
        <span class="en">Spring</span>은 <span class="en">Saint Etienne</span> 초기 작품 특유의 부드러운 멜로디와 샘플링 감각이 잘 드러나는 곡이다. 
        <span class="en">Sarah Cracknell</span>의 담백한 보컬과 따뜻한 사운드는 곡 전체에 가벼운 낙관성을 부여한다.
        </p><p>
        제목 그대로 봄을 이야기하지만, 이 곡은 계절의 화려함보다 새로운 시작에 대한 기대를 담고 있다. 
        <span class="en">Saint Etienne</span> 특유의 도시적 감수성이 녹아 있어 자연보다는 사람들의 일상과 거리의 풍경이 먼저 떠오른다.
        </p>
      `
    },


    "aiaigasa": {
      title: '<span class="jp">相合傘</span>',
      artist: 'Akiko Yano - [<span class="jp">いろはにこんぺいとう</span>]',
      cover: "./img/album/aiaigasa.jpg",
      audio: "./audio/aiaigasa.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-red",
      tags: ["Spectacle", "Radiant"],
      text: `
        <p>
        <span class="jp">相合傘</span>는 아키코 야노의 두 번째 앨범 
        <span class="jp">いろはにこんぺいとう</span>에 수록된 곡이다. 이 앨범은 일본 팝, 재즈, 펑크, 포크가 자유롭게 뒤섞인 작품으로 평가받으며, 현재까지도 일본 음악사에서 중요한 위치를 차지한다.
        </p><p>
        제목인 <span class="jp">"相合傘"</span>은 일본어로 한 우산을 함께 쓰는 모습을 뜻한다. 일본에서는 오래전부터 연인이나 호감을 가진 두 사람을 상징하는 이미지로 사용되어 왔다.
        </p><p>
        곡은 사랑을 거창하게 이야기하지 않는다. 대신 아키코 야노 특유의 자유로운 피아노 연주와 장난기 있는 보컬을 통해, 누군가와 같은 방향으로 걷는 순간의 즐거움을 그려낸다. 음악은 재즈처럼 흐르다가도 어린아이 같은 순수함을 드러내며, 복잡한 감정보다는 움직임과 풍경을 남긴다.
        </p>
      `
    },

    "unifyingthought": {
      title: 'Unifying Thought',
      artist: 'Chanel Beads - [Your Day Will Come]',
      cover: "./img/album/chanel.jpg",
      audio: "./audio/unifyingthought.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-black",
      tags: ["melancholy", "cool"],
      text: `
        <p>
        <span class="en">Unifying Thought</span>는 
        <span class="en">Chanel Beads</span>의 데뷔 앨범 
        <span class="en">[Your Day Will Come]</span>에 수록된 곡이다. 
        <span class="en">Chanel Beads</span>는 뉴욕 기반의 프로젝트로, 앰비언트, 인디 팝, 필드 레코딩, 실험음악을 결합한 독특한 사운드로 알려져 있다.
        </p><p>
        곡은 명확한 후렴구나 극적인 전개보다, 여러 소리의 층이 천천히 겹쳐지는 방식으로 진행된다. 보컬은 선명하게 전면에 나서기보다 악기들과 함께 흐르며 하나의 질감을 형성한다.
        </p>
      `
    },

    "songformessenger": {
      title: 'Song For The Messenger',
      artist: 'Chanel Beads - [Your Day Will Come]',
      cover: "./img/album/chanel2.jpg",
      audio: "./audio/chanel.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-black",
      tags: ["melancholy"],
      text: `
        <p>
        <span class="en">Song for the Messenger</span>는 
        <span class="en">[Your Day Will Come]</span>에 수록된 곡이다. 곡 제목은 "전달자를 위한 노래" 정도로 번역할 수 있지만, 
        <span class="en">Chanel Beads</span>는 이 곡에 대해 구체적인 서사를 공개하지 않았다.
        </p><p>
        음악은 비교적 절제되어 있으며, 멀리서 들려오는 듯한 보컬과 공간감 있는 편곡이 중심이 된다. 명확한 메시지보다는 전달되기 전의 감정이나 분위기를 남기는 방식에 가깝다.
        </p>
      `
    },

    "policescanner": {
      title: 'Police Scanner',
      artist: 'Chanel Beads - [Your Day Will Come]',
      cover: "./img/album/chanel.jpg",
      audio: "./audio/chanel.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-black",
      tags: ["melancholy", "cool"],
      text: `
        <p>
        <span class="en">Police Scanner</span>는 
        <span class="en">[Your Day Will Come]</span>에 수록된 곡으로, 제목은 경찰 무전 수신기를 의미한다. 
        <span class="en">Chanel Beads</span>의 음악에서 자주 등장하는 일상적이고 구체적인 사물이 제목으로 사용된 사례 중 하나다.
        </p><p>
        곡은 주변 환경의 소음과 음악의 경계를 흐리는 방식으로 구성된다. 보컬과 악기가 분리되지 않고 섞여 있으며, 전체적으로 현실과 꿈의 중간 지대 같은 분위기를 만든다.
        </p>
      `
    },

    "highroad": {
      title: 'High Road',
      artist: 'Charlotte Day Wilson - [Patchwork]',
      cover: "./img/album/highroad.jpg",
      audio: "./audio/highroad.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-grey",
      tags: ["cool", "melancholy"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },


    "bodyfeeling": {
      title: 'Bodyfeeling',
      artist: 'Underscores - [U]',
      cover: "./img/album/bodyfeeling.jpg",
      audio: "./audio/bodyfeeling.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-skyblue",
      tags: ["cool", "melancholy"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },

    "onemantokyo": {
      title: 'One Man Tokyo',
      artist: 'Martyr Group - [Martyr Group]',
      cover: "./img/album/onemantokyo.jpg",
      audio: "./audio/onemantokyo.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-brown",
      tags: ["melancholy", "urban", "comforting"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },

    "thesedays": {
      title: 'These Days',
      artist: 'Nico - [Chelsea Girl]',
      cover: "./img/album/thesedays.jpg",
      audio: "./audio/thesedays.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-grey",
      tags: ["melancholy", "urban", "comforting"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },

    "evergreenwardrobe": {
      title: 'Evergreen Wardrobe',
      artist: 'edeF. & Orlando',
      cover: "./img/album/evergreenwardrobe.jpg",
      audio: "./audio/evergreenwardrobe.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-beige",
      tags: ["urban"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },

    "meyou": {
      title: 'Me Vs. You',
      artist: 'Everyone Asked About You - [Everyone Asked About You - EP]',
      cover: "./img/album/meyou.jpg",
      audio: "./audio/meyou.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-pink",
      tags: ["melancholy", "comforting","urban"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },

    "icanseeclearlynow": {
      title: 'I Can See Clearly Now',
      artist: 'Johnny Nash - [The Best Of Johnny Nash]',
      cover: "./img/album/icanseeclearlynow.jpg",
      audio: "./audio/icanseeclearlynow.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-pink",
      tags: ["comforting"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },

    "theloveisaw": {
      title: 'The Love I Saw In You Was Just A Mirage',
      artist: 'Smokey Robinson & The Miracles - [Make It Happen]',
      cover: "./img/album/theloveisaw.jpg",
      audio: "./audio/theloveisaw.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-blue",
      tags: ["comforting"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },

    "itaintnouse": {
      title: 'It Aint No Use',
      artist: 'Stevie Wonder - [Fulfillingness First Finale]',
      cover: "./img/album/youhavent.jpg",
      audio: "./audio/itaintnouse.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-orange",
      tags: ["melancholy", "cool"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },

    "magiciwantu": {
      title: 'Magic I Want You',
      artist: 'Jane Remover - [Love - EP]',
      cover: "./img/album/magiciwantyou.jpg",
      audio: "./audio/magiciwantyou.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-blue",
      tags: ["cool"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },

    "tooshytosay": {
      title: 'Too Shy To Say',
      artist: 'Stevie Wonder - [Fulfillingness First Finale]',
      cover: "./img/album/tooshytosay.jpg",
      audio: "./audio/tooshytosay.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-orange",
      tags: ["melancholy", "cool"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },

    "meandmyarrow": {
      title: 'Me And My Arrow',
      artist: 'Harry Nilson - [The Point]',
      cover: "./img/album/meandmyarrow.jpg",
      audio: "./audio/meandmyarrow.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-green",
      tags: ["comforting"],
      text: `
        <p>
        .
        </p><p>
        .
        </p>
      `
    },

    "ashestoashes": {
      title: 'Ashes To Ashes',
      artist: 'David Bowie - [Scary Monsters (And Super Creeps)]',
      cover: "./img/album/ashestoashes.jpg",
      audio: "./audio/ashestoashes.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-orange",
      tags: ["Spectacle"],
      text: `
        <p>
        <span class="en">Ashes to Ashes</span>는 
        <span class="en">[Scary Monsters (and Super Creeps)]</span>의 대표곡 중 하나이며, 
        <span class="en">Bowie</span>가 1969년 발표한 자신의 캐릭터 
        <span class="en">Major Tom</span>을 다시 등장시킨 노래로 유명하다.
        </p><p>
        가사에서 <span class="en">Bowie</span>는 과거의 우주비행사 
        <span class="en">Major Tom</span>을 다시 불러내지만, 이번에는 영웅이 아니라 길을 잃은 인물로 묘사한다. 많은 평론가들은 이 곡을 
        <span class="en">Bowie</span> 자신의 과거와 약물 사용 시절을 돌아보는 작품으로 해석해 왔다. 뮤직비디오는 당시로서는 엄청난 제작비가 투입된 작품으로 알려져 있으며, 오늘날에도 1980년대 뮤직비디오 역사에서 가장 영향력 있는 영상 중 하나로 평가된다.
        </p><p>
        음악적으로는 신스팝, 아트 록, 뉴웨이브가 결합되어 있으며, 밝은 멜로디와 달리 어딘가 슬프고 초현실적인 분위기를 품고 있다.
        </p>
      `
    },

    "fashion": {
      title: 'Fashion',
      artist: 'David Bowie - [Scary Monsters (And Super Creeps)]',
      cover: "./img/album/ashestoashes.jpg",
      audio: "./audio/fashion.mp3",
      link: "special-wanting-you.html",
      overlayClass: "overlay-red",
      tags: ["Spectacle"],
      text: `
        <p>
        <span class="en">Fashion</span>은 
        <span class="en">David Bowie</span>의 앨범 
        <span class="en">[Scary Monsters (and Super Creeps)]</span>에 수록된 곡이다. 1980년에 발표된 이 곡은 당시 런던의 패션 문화와 나이트라이프를 배경으로 하며, 
        <span class="en">Bowie</span>의 가장 유명한 뉴웨이브 시기 작품 중 하나로 꼽힌다.
        </p><p>
        겉으로 보면 패션과 유행을 찬양하는 노래처럼 들리지만, 실제로는 훨씬 아이러니한 곡이다. 
        <span class="en">Bowie</span>는 반복적으로 "Fashion!"을 외치면서도 사람들이 유행을 맹목적으로 따라가는 모습을 풍자한다.
        </p><p>
        음악적으로는 펑크<span class="en">(Funk)</span>, 뉴웨이브, 댄스 음악이 결합되어 있다. 날카로운 기타 리프와 강한 리듬이 곡 전체를 끌고 가며, 
        <span class="en">Bowie</span> 특유의 거리감 있는 보컬이 냉소적인 분위기를 만든다.
        </p>
      `
    },

















};






  // Open Tag
  if (tagButton) {
    tagButton.addEventListener("click", function () {
      document.body.classList.toggle("tag-open");
    });
  }

  // 모든 song 클릭
  document.querySelectorAll("[data-song]").forEach(function (song) {
    song.addEventListener("click", function () {
      const songId = song.dataset.song;
      const data = songData[songId];

      if (!data) return;

      detailTitle.innerHTML = data.title;
      detailArtist.innerHTML = data.artist;
      detailCover.src = data.cover;
      if (detailArrow) {detailArrow.href = data.link || "#";}

      detailArrow.href = data.link;

      detailTags.innerHTML = data.tags
  .map(function (tag) {
    const tagClass = tag.toLowerCase().replace(/\s+/g, "-");
return `<span class="panel-tag tag-${tag.toLowerCase()}">${tag}</span>`;
  })
  .join("");

      const overlayClasses = [
  "overlay-green",
  "overlay-pink",
  "overlay-purple",
  "overlay-blue",
  "overlay-yellow",
  "overlay-beige",
  "overlay-grey",
  "overlay-black",
  "overlay-brown",
  "overlay-skyblue",
  "overlay-orange",
  "overlay-red"
];

detailOverlay.classList.remove(...overlayClasses);
detailPanel.classList.remove(...overlayClasses);

detailOverlay.classList.add(data.overlayClass);
detailPanel.classList.add(data.overlayClass);

      detailText.innerHTML = data.text;
      detailOverlay.className = "detail-overlay";
      detailOverlay.classList.add(data.overlayClass);

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.src = data.audio;
      }

      if (playButton) {
        playButton.textContent = "▶";
        playButton.classList.remove("is-playing");
      }

      document.body.classList.add("detail-open");
      detailPanel.setAttribute("aria-hidden", "false");
    });
  });

  // Overlay 클릭 시 닫기
  if (detailOverlay && detailPanel) {
    detailOverlay.addEventListener("click", function () {
      document.body.classList.remove("detail-open");
      detailPanel.setAttribute("aria-hidden", "true");

      if (audio) {
        audio.pause();
      }

      if (playButton) {
        playButton.textContent = "▶";
        playButton.classList.remove("is-playing");
      }
    });
  }

  // Play / Pause
  if (playButton && audio) {
    playButton.addEventListener("click", function () {
      if (playButton.classList.contains("is-playing")) {
        audio.pause();
        playButton.textContent = "▶";
        playButton.classList.remove("is-playing");
      } else {
        audio.play();
        playButton.textContent = "❚❚";
        playButton.classList.add("is-playing");
      }
    });

    audio.addEventListener("ended", function () {
      playButton.textContent = "▶";
      playButton.classList.remove("is-playing");
    });
  }

  const curationSlider = document.querySelector("#curationSlider");
  const curationKnob = document.querySelector("#curationSlider .slide-knob");

  if (curationSlider && curationKnob) {
    let dragging = false;
    let startX = 0;
    let knobX = 0;

    function maxX() {
      return curationSlider.offsetWidth - curationKnob.offsetWidth;
    }

    function moveKnob(x) {
      knobX = Math.max(0, Math.min(x, maxX()));
      curationKnob.style.transform = `translateX(${knobX}px)`;
    }

    curationSlider.addEventListener("pointerdown", function (e) {
      dragging = true;
      startX = e.clientX - knobX;
      curationKnob.style.transition = "none";
      curationSlider.setPointerCapture(e.pointerId);
    });

    curationSlider.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      moveKnob(e.clientX - startX);
    });

    curationSlider.addEventListener("pointerup", function () {
      dragging = false;
      curationKnob.style.transition = "transform 0.2s ease";

      if (knobX > maxX() * 0.75) {
        moveKnob(maxX());
        window.open("curation.html", "_blank");
      } else {
        moveKnob(0);
      }
    });
  }
});
