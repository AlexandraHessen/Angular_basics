import { Component } from "@angular/core";

@Component({
  selector: "app-post4",
  template: `
  <div class="post4">
    <h2>
      Post title
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam a recusandae, fugiat assumenda qui libero! Laborum perferendis quis officia velit doloremque! Qui corporis veritatis animi aperiam reiciendis dolores, tempore exercitationem.</p>
  </div>

  `,
  styles: [`
  .post4{
    padding: .5rem;
    border: 2px solid black;
  }

  h2{
    font-size: 1rem;
  }
  `]
})
export class Post4Component { }
