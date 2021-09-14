<h1 align='center'>Random Student Picker</h1>
</br>
<p>
  Random student selector built in an 8bit design with the objective of being the random students selector of our course.
  It also has the functionality of adding and deleting students from the list in order to be used by anyone.
</p>
</br>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


![Random picker screnshot][main screenshot]

### Built With

<a href="/">
  <img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/html5.png" alt=html5 width="50" height="50"/>
</a>
<a href="/">
  <img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/css3.png" alt=css3 width="50" height="50"/>
</a>
<a href="https://www.javascript.com/">
  <img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/js.png" alt=javascript width="50" height="50"/>
</a>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.


### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:Lnferrari/random-student-picker.git
   ```
2. Enter your students in `js/app.js`
   ```JS
   4   const students = [ 'student-1', 'student-2', ...students ]
   ```
3. Run `index.html`
   ```html
   PICK ONE!
   ```



<!-- USAGE EXAMPLES -->
## Usage

<p>
  By clicking the PICK ONE button will select one of the names which after 2.5 seconds will be displayed as well as removed from the list until the application is restarted. This is achieved by pressing on RESET at any time.

  Ussing the EDIT LIST button will show all the names, differentiating the ones that have already been selected. It is possible to add and/or remove names from the list at any time.
</p>

</br>

![Random-picker.gif][rp-1.gif]  ![Random-picker.gif][rp-2.gif]



<!-- ROADMAP -->
## Roadmap

See the [open issues][issues] for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [React Router DOM](https://reactrouter.com/)
* [axios](https://axios-http.com/)
* [React Tooltip](https://wwayne.github.io/react-tooltip/)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Momentjs](https://momentjs.com/)
* [GitHub Pages](https://pages.github.com)



<!-- CONTACT -->
## Contact

Lucas Ferrari - [Linkedin][linkedin] - ln.ferrari@hotmail.com

Project Link: [https://lnferrari.github.io/random-student-picker/][Random student picker]



<!-- LICENSE -->
## License

Distributed under the MIT License.



<!-- MARKDOWN LINKS & IMAGES -->
[main screenshot]: ./assets/main-random-picker.png
[rp-1.gif]: ./assets/randompicker1.gif
[rp-2.gif]: ./assets/randompicker2.gif
[issues]: https://github.com/Lnferrari/random-student-picker/issues
[Random student picker]: https://lnferrari.github.io/random-student-picker/
[linkedin]: https://www.linkedin.com/in/lucasferrari1/
