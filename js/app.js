const courses = [
  {
      id: 7,
      title: "Kiến Thức Nhập Môn IT",
      slug: "lessons-for-newbie",
      description:
        "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
      students_count: 57851,
      image_url: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
      video_url: "https://fullstack.edu.vn/courses/lessons-for-newbie",
    },
  {
    id: 2,
    title: "HTML, CSS từ Zero đến Hero",
    slug: "html-css",
    description:
      "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
    students_count: 155567,
    last_completed_at: "2021-12-10 23:30:11",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    video_url: "https://fullstack.edu.vn/courses/html-css",
  },
  {
    id: 3,
    title: "Responsive Với Grid System",
    slug: "responsive-web-design",
    description:
      "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
    students_count: 21806,
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
    video_url: "https://fullstack.edu.vn/courses/responsive-web-design",
  },
  {
    id: 5,
    title: "HTML, CSS Tips & Tricks",
    slug: "html-css-tutorials",
    description:
      "Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế",
    students_count: 13761,
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/5.png",
    video_url: "https://fullstack.edu.vn/courses/html-css-tutorials",
  },
  {
    id: 1,
    title: "JavaScript Cơ Bản",
    slug: "javascript-co-ban",
    description:
      "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học",
    students_count: 95209,
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    video_url: "https://fullstack.edu.vn/courses/javascript-co-ban",
  },
  {
    id: 12,
    title: "JavaScript Nâng Cao",
    slug: "javascript-nang-cao",
    description:
      "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
    students_count: 13856,
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
    video_url: "https://fullstack.edu.vn/courses/javascript-nang-cao",
  },
  {
    id: 13,
    title: "Xây Dựng Website với ReactJS",
    slug: "reactjs",
    description:
      "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
    students_count: 26640,
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
    video_url: "https://fullstack.edu.vn/courses/reactjs",
  },
  {
    id: 6,
    title: "Node & ExpressJS",
    slug: "nodejs",
    description:
      "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
    students_count: 18783,
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/6.png",
    video_url: "https://www.youtube.com/watch?v=z2f7RHgvddc",
  }
];
function Header(props) {
  return ( 
      <h1>{props.name}</h1>
  )
}
function CourseItem(props) {
    return (
      <div className="courseElement" id = {props.id}>
        <a href={props.video_url} target="_blank"><img src={props.image_url} alt={props.slug} className="courseImage" /></a>
        <p className="description">{props.title} </p>
        <i className="fa-solid fa-user-group"></i>
        <p className="student">{props.students_count}</p>
        <p>{props.description}</p>
      </div>
    )
}
function App() {
  return(
    <React.Fragment> 
      <div className="heading">
        <Header name ="Welcome to F8 Courses"/>
      </div>
      <div className="courseBlock">
          {courses.map((course) => {
              return (
                <CourseItem
                key = {course.id}
                id = {course.id}
                title= {course.title}
                slug = {course.slug}
                description = {course.description}
                students_count = {course.students_count}
                image_url = {course.image_url}
                video_url= {course.video_url} 
              />)
          })}
      </div>
    </React.Fragment>
  )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);