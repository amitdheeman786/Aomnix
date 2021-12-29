import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aomnix';

  ngOnInit(): void {

 
 
 $(function () {
      // Button Effect
      $('.btn-effect')
        .on('mouseenter', function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find('span').css({ top: relY, left: relX })
        })
        .on('mouseout', function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find('span').css({ top: relY, left: relX })
        });
    });
    // Element Motion Effect
    var moveForce = 20; // max popup movement in pixels
    var rotateForce = 10; // max popup rotation in deg
    $(document).mousemove(function (e) {
      var docX = $(document).width();
      var docY = $(document).height();
      var moveX = (e.pageX - docX / 2) / (docX / 2) * -moveForce;
      var moveY = (e.pageY - docY / 2) / (docY / 2) * -moveForce;
      var rotateY = (e.pageX / docX * rotateForce * 2) - rotateForce;
      var rotateX = -((e.pageY / docY * rotateForce * 2) - rotateForce);
      $('.motion-effect')
        .css('left', moveX + 'px')
        .css('top', moveY + 'px')
        .css('transform', 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
    });

  } 
}
