<p align="center"><img src="https://i.imgur.com/qCPpiGY.png" height="150px"/></p>

<p align="center"> <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/sproutt/eussya-eussya-view"> <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/sproutt/eussya-eussya-view"> <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr-raw/sproutt/eussya-eussya-view"> <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/sproutt/eussya-eussya-view"> <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/sproutt/eussya-eussya-view?style=social"></p>

### 으쌰으쌰 프로젝트

매일 일찍 일어나는 습관을 기르고 싶은 사람 :exclamation:

매일매일 나른하게 시간을 허송세월 하고 있는 당신 📱

👩🏻‍💻'개발자'를 위한 동기부여 웹 서비스! 🧑🏻‍💻

#### **기디개 펴는 당신이 멋있다. 으쌰으쌰**

### 프로젝트 규칙

이 레포지토리, 으쌰으쌰 프로젝트를 처음 접하시는 같이 개발하는 개발자에게 씁니다.
이 규칙은 서로의 코드를 더 잘 이해할 수 있게 정해진 규칙 입니다. 때문에 언제든지 모든 개발자가 동의한다면 바꿀 수 있습니다.
한 번 정해진 규칙은 그 규칙이 바뀔 때까지 준수하여 서로가 발전할 수 있게 도와줍시다.

#### 네이밍 컨벤션

1. 파일이름의 형식은 **"camelCase"** 를 사용하도록 합시다.
2. 컴포넌트 (react)는 **"CamelCase"** 구조를 따릅니다.
3. 컴포넌트는 파일명 혹은 index.jsx의 경우 상위 폴더이름을 따라야합니다. ex) root/index.js => <Root />
4. 파일 이름은 소문자로 시작하지만 컴포넌트 이름은 대문자로 시작합니다.
5. 변수, 함수명은  **"camelCase"** 를 사용합니다. 
6. class 나 함수형 컴포넌트의 이름은 **"CamelCase"** 을 따릅니다.
7. enum에 선언되는 값들은 **"CAPITAL_UNDER_SCORE"** 를 따릅니다.
8. 컴포넌트를 제외한 함수의 이름은 동작의 의미가 담겨 있어야 합니다.
9. 컴포넌트 코드가 들어간 파일의 확장자는 tsx를 사용합니다.

#### 코딩 컨벤션

1. else 사용을 최대한 자제합니다.
2. 컴포넌트 렌더링의 경우 삼항연산자 사용을 권장합니다.
3. 하나의 함수는 하나의 역할만을 합니다.

#### clean Architecture 구조 

 클린 아키텍쳐는 프레임워크에 종속되지 않기 위해 사용합니다. 또한 각 계층마다 레이어가 나뉘어져 있어 test 하기 용이하고, 책임이 나누어져 있어 어디에서 오류가 났는지 찾기 쉽습니다.
 우리 으쌰으쌰 프로젝트의 클린 아키텍쳐는 다음과 같이 구성되어 있습니다.
1. react-free [고민중]
    - presentation Layer : 사용자가 직접 보고 인터렉션 하는 곳입니다. presentation Layer는 service Layer의 동작만을 사용합니다.
    - service Layer: 정의된 use-case를 사용하여 동작을 호출하여 수행합니다. 
    - domain Layer: data-Layer를 조합하여 묶은 repository로 구성 되어 있고 실제 내부 동작이 이루어지는 곳입니다. use-case에 정의 된 행동들이 실제 수행되게 됩니다.
    - data Layer(특수 레이어): 이 레이어는 storage와 각종 api 와 통신한 데이터 리퀘스트 동작을 요청합니다.
    - entity Layer: 이 레이어는 엔티티들이 약속으로 정의 되어 있는 레이어 입니다. 실제 통신되고 다루어지는 모든 데이터는 이 형태로 전달 됩니다.

<p align="center"><img src="https://woowabros.github.io/img/2019-10-02/the-clean-architecture.png" height="250px"/></p>

2. react-relation (Flux Architecture) : 이외에 전역적인 data 관리가 필요할 때 변수로 선언하는 것이 매우 비효율적이기 때문에 react library의 기능인 context api를 사용할 것입니다. 하지만 이경우는 라이브러리에 종속적이기 때문에 clean Architecture와는 조금 맞지 않습니다. 그래서 전역적인 data 관리는 Flux Architecture 를 사용하여 단방향 데이터 흐름을 만들어 낼것입니다. 이 때도 presentaion은 단순히 action 만 취하면 내부적으로 디스패처가 작동하고 스토어에 값을 전달하고 view가 그 값의 변경을 감지 할 수 있도록 할 것입니다. 이 때 많은 구조에서는 action에 api 요청을 넣는 경우가 많지만 모든 data를 전역적으로 관리할 필요가 없으므로 부적합하다고 판단하여 두 가지 패턴을 따로 분리하여 사용할 것입니다.

<p align="center"><img src="https://cask.scotch.io/2014/10/V70cSEC.png" height="250px"/></p>

#### Presentation 구조

으쌰으쌰 뷰의 구조는 세 가지로 나누어저 있습니다.
- page: Layout이 담겨 있으며 기능을 담고 있는 컴포넌트들이 Layout에 배치 됩니다. 대부분의 로직이 이 곳에서 실행됩니다.
- component: page에 요소로 들어갈 단위의 컴포넌트임니다. ui 적인 인터렉션이 발생합니다.
- atom: page나 component에 사용되는 작은 단위의 컴포넌트입니다. 스타일만 조금 담겨 있는 버튼 인풋등이 해당합니다.

#### Github Flow!

으쌰으쌰 프로젝트는 github flow를 이용하여 프로젝트를 진행합니다.
github flow는 master branch에 마로마로 feature, hotfix들을 머지하는 과정을 반복하게 됩니다.

- 이슈 이름은 [feature/fix/doc]/Isuue-[Number]을 사용합니다.
- 커밋은 어떤 행동을 했는지 잘 알 수 있게 이름을 작성해주세요.

#### ZenHub

또한 으쌰으쌰 프로젝트는 ZenHub kanban을 이용하여 필요한 이슈들을 달고 자신이 하고자하는 일에 자신의 이름과 사진을 달고 스프린트를 수행하게 됩니다.
- new Issue : 언제든지 필요하다고 생각하는 이슈들이 생성되는 곳 입니다.
- Icebox: 당장은 급하지 않은 이슈들이 담긴 곳입니다.
- backlog: 이번스프린트에 해야할 Issue들이 올라가는 곳입니다. 이 때 이슈에 자신이 하려고하는 곳에 assign 해주세요.
- In progress: 현재 진행중인 이슈입니다.
- Q&A,Review: 리뷰중인 이슈 및 PR 입니다.
- [그 외 자세한 사항은 이 url을 참조하세요!](https://cheese10yun.github.io/github-proejct/)
