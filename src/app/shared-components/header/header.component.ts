import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

    //Header 
    // $(document).ready(function() {
    //   $("body").removeClass("scroll-down");
    //  });

    //  const body = document.body;
    //  const scrollUp = "scroll-up";
    //  const scrollDown = "scroll-down";
    //  let lastScroll = 0;

    //  window.addEventListener("scroll", () => {
    //    const currentScroll = window.pageYOffset;
    //    if (currentScroll <= 1) {
    //      body.classList.remove(scrollUp);
    //      return;
    //    }

    //    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    //      // down
    //      body.classList.remove(scrollUp);
    //      body.classList.add(scrollDown);
    //    } else if (
    //      currentScroll < lastScroll &&
    //      body.classList.contains(scrollDown)
    //    ) {
    //      // up
    //      body.classList.remove(scrollDown);
    //      body.classList.add(scrollUp);
    //    }
    //    lastScroll = currentScroll;
    //  });
    // End header 

    $('.header-inner .menu li a[href*="#"]').on('click', function (e) {
      e.preventDefault()

      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
      )
    })
  }
}
