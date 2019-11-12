import { TestBed } from '@angular/core/testing';

import { ArticlesOnlineService } from './article-online.service';

describe('ArticleOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesOnlineService = TestBed.get(ArticlesOnlineService);
    expect(service).toBeTruthy();
  });
});
