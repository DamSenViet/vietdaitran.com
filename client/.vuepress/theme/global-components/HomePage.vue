<template>
  <div class="home">
    <section class="hero">
      <h1 class="name">
        <span>Viet</span> <br />
        <span>Tran</span>
      </h1>
      <div class="title">Developer / UI & UX Designer</div>
    </section>
    <section class="about basic-section">
      <h2>Introduction</h2>
      <p>
        Hello there! Welcome to my portfolio. I'm Viet, a Developer and UI / UX
        designer (and hobby illustrator) located on the US West Coast. I
        freelance web development and web design in my spare time. I'm a
        self-motivated creator and am always looking forward to learn new
        technologies to add to my toolkit. I'm excited for new opportunities,
        the chance to meet new people, and meaningfully contribute to promising
        software projects.
      </p>
      <div class="action-container">
        <a href="https://github.com/DamSenViet">
          <span>Check Out My GitHub</span>
          <GithubIcon />
          <span>&rarr;</span>
        </a>
      </div>
    </section>
    <section class="contact basic-section">
      <h2>Opportunities</h2>
      <p>
        New knowledge is always useful and I'm always hungry to learn new
        things. I'm constantly working on new projects to deliver solutions to
        both hobby and academic communities. Have an idea? Interested in joining
        me for a project? Let's gets the ball rolling and discuss ideas
        together!
      </p>
      <div class="action-container">
        <RouterLink to="/contact">
          <span>Let's Talk Over Coffee</span>
          <CoffeeIcon />
          <span>&rarr;</span>
        </RouterLink>
      </div>
    </section>
    <section class="timeline basic-section">
      <h2>Timeline</h2>
      <div class="table-container">
        <div class="table-header">
          <div class="project">Project</div>
          <div class="release">Planned Release</div>
        </div>
        <div class="table-content">
          <div class="table-row">
            <div class="project">keybits-js</div>
            <div class="release">Dec. 2020</div>
          </div>
        </div>
      </div>
      <div class="action-container">
        <RouterLink to="/planned">
          <span>Explore Planned Projects</span>
          <ActivityIcon />
          <span>&rarr;</span>
        </RouterLink>
      </div>
    </section>
    <section class="projects basic-section">
      <h2>Projects</h2>
      <p>
        Interested in my previous projects? Here's a small preview of my recent
        work.
      </p>
      <Projects :recent="6" />
      <div class="action-container">
        <RouterLink to="/projects">
          <span>View All Projects</span>
          <PackageIcon />
          <span>&rarr;</span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script>
import Projects from "./../components/Projects";
import {
  GithubIcon,
  CoffeeIcon,
  BriefcaseIcon,
  ActivityIcon,
  PackageIcon,
} from "vue-feather-icons";

export default {
  name: "HomePage",

  components: {
    Projects,
    GithubIcon,
    CoffeeIcon,
    BriefcaseIcon,
    ActivityIcon,
    PackageIcon,
  },
};
</script>

<style lang="stylus" scoped>
@import './../styles/screens';
@import './../styles/colors';
@import './../styles/interactions';
@import './../styles/fonts';

.home {
  display: grid;
  grid-template-areas: 'hero' 'about' 'contact' 'timeline' 'projects';
  justify-content: center;
  justify-items: stretch;
  row-gap: 3rem;
  column-gap: 3rem;

  > .hero {
    grid-area: hero;
    text-align: center;
    font-smooth: never;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;

    > .name {
      margin-bottom: 0rem;
      line-height: 1.75;
      font-family: $fonts-monoton, $fonts-averia-serif-libre;
      font-size: 3.2rem;
      text-transform: uppercase;
      letter-spacing: 6px;
      font-weight: 400;

      +screens-md() {
        br {
          display: none;
        }
      }
    }

    > .title {
      font-family: $fonts-averia-serif-libre;
      font-size: 0.875rem;
      font-style: italic;
      letter-spacing: 1px;
    }
  }

  .basic-section {
    > h2 {
      margin-top: 0rem;
      text-transform: uppercase;
      font-size: 0.95rem;
      font-family: $fonts-open-sans, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    }

    > p {
      text-align: justify;
      font-size: 0.8rem;
      font-family: sans-serif, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    }

    > .action-container {
      margin-top: 1.5rem;

      > a {
        position: relative;
        border-reveal($colors-text, 1px, 6px, 10px);

        > span {
          font-size: 0.75rem;
          color: black;
          vertical-align: middle;
        }

        > svg {
          // fill: $colors-text;
          height: 1rem;
          stroke: $colors-text;
          vertical-align: middle;
          display: inline-block;
        }
      }
    }

    > h3 {
      font-size: 0.8rem;
    }

    > ul {
      font-size: 0.8rem;
    }
  }

  > .about {
    grid-area: about;
  }

  > .contact {
    grid-area: contact;
  }

  > .services {
    grid-area: services;
  }

  > .timeline {
    grid-area: timeline;

    +screens-md() {
      display: grid;
      grid-template-rows: auto 1fr auto;
    }

    .table-container {
      +screens-md() {
        display: grid;
        grid-template-rows: auto 1fr;
      }

      .table-header, .table-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        column-gap: 10px;
      }

      .table-header {
        text-decoration: underline;
        font-size: 0.8rem;
      }

      .table-content {
        margin-top: 1rem;
        justify-self: stretch;

        .table-row {
          font-size: 0.8rem;

          .project, .release {
            padding-top: 1rem;
            padding-left: 1rem;
            padding-bottom: 1rem;
          }

          &:nth-child(odd) {
            background-color: $colors-hint-of-red;
          }
        }
      }
    }
  }

  > .projects {
    grid-area: projects;
  }
}
</style>