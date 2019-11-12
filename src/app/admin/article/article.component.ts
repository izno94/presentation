import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from 'src/app/service/article-online.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor(private articleService: ArticlesOnlineService) {}
  onCreateArticle($event, form) {
    $event.preventDefault();
    console.log(form.value);

    this.articleService.create(form.value).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {}
}
