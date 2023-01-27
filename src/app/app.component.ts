import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const mockResponse = [
  {
    title: 'Software Development Analyst with Security Clearance',
    description: `
    At Northrop Grumman, our employees have incredible opportunities to work on revolutionary systems that impact people's lives around the world today, and for generations to come. Our pioneering and inventive spirit has enabled us to be at the forefront of many technological advancements in our nation's history - from the first flight across the Atlantic Ocean, to stealth bombers, to landing on the moon. We look for people who have bold new ideas, courage and a pioneering spirit to join forces to invent the future, and have fun along the way. Our culture thrives on intellectual curiosity, cognitive diversity and bringing your whole self to work - and we have an insatiable drive to do what others think is impossible. Our employees are not only part of history, they're making history. Northrop Grumman is seeking a software developer.
    `,
    postedAt: '1 day ago',
    type: 'Full time',
    location: 'San Francisco',
  },
  {
    title: 'Technical Intern: Software Development jobs in ',
    description: `
    As an intern at Synopsys, you will gain hands-on experience while working alongside industry professionals. You will develop and refine skills relevant to your major and future career by contributing to high-impact business projects. The Synopsys intern program integrates our interns into the culture with career opportunities upon graduation.
    `,
    postedAt: '2 days ago',
    type: 'Part time',
    location: 'Las Vegas',
  },
  {
    title: 'Software Development Instructor - REMOTE',
    description: `
    Individual will be responsible for assisting the software development team on documenting business requirements, QA testing, and perform data entry. Candidate must possess strong analytical skills, excellent attention to detail, great interpersonal skills. Through this internship program, the intern can expect challenging, meaningful experience in a specific area of our business related to your interests and skills. Focus areas may include business requirement analysis, product design, data analysis, software development, CRM administration. Throughout the assignments, there will also be opportunities to participate in regular activities, all while developing professional skills and capabilities.
    `,
    postedAt: '3 days ago',
    type: 'Part time',
    location: 'New York',
  },
  {
    title: 'Software Engineer, Research and Development',
    description: `
    We are an EdTech company offering remote, hybrid, and in-person programs to help companies and individuals learn high-demand technology skills for their future careers! Due to recent growth, we are seeking talented Software Development Instructors specializing in Java full-stack development to join our teaching team (remote, hybrid and in-person opportunities available). This position requires 7+ years professional experience in full-stack software development using Java, HTML, CSS, JavaScript, and SQL. Teaching/mentoring experience is preferred, but not required; however, passion for teaching/mentoring is a MUST!
    `,
    postedAt: '4 days ago',
    type: 'Full time',
    location: 'Chicago',
  },
  {
    title: 'Software Development Analyst with Security Clearance',
    description: `
    For more than 20 years, AEG has played a pivotal role in transforming sports and live entertainment. Annually, we host more than 160 million guests, promote more than 10,000 shows and present more than 22,000 events around the world. We are committed to innovation, artistry, and community, and leverage the power of our 300+ venues, leading sports franchises, marquee music brands, integrated entertainment districts, premier ticketing platform and global sponsorship activations, to create memorable moments that give the world reason to cheer.
    `,
    postedAt: '5 days ago',
    type: 'Part time',
    location: 'New York',
  },
  {
    title: '.NET Software Development Lead (Choice)',
    description: `
    Purpose of Position: This is a hands-on, full-stack development leadership position responsible for leading as well as coding, designing, and supporting applications that support Word and Brown's key business objectives. This role leads a dedicated team and collaborates with multiple technology and business teams. This role provides guidance and oversight to other developers.
    `,
    postedAt: '6 days ago',
    type: 'Full time',
    location: 'San Francisco',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  jobTitle = '';
  location = '';

  jobs: any[] = [];

  resultsShown = false;

  constructor(private http: HttpClient) {}

  search() {
    const httpOptions = {
      params: {
        jobTitle: this.jobTitle,
        location: this.location,
      },
    };
    this.http
      .get(
        'https://2yu0xpu560.execute-api.us-east-1.amazonaws.com/dev/board/jobs',
        httpOptions
      )
      .subscribe((res) => {
        // this.jobs = res; // once API is done, replace mockResponse with this line
        this.jobs = mockResponse
        this.resultsShown = true;
      });
  }

  back() {
    this.resultsShown = false
  }
}
