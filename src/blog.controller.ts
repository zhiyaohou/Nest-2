import { Controller, Get, Post, Delete, Patch, Param} from '@nestjs/common';
import { AppService } from './app.service';

var blog: string = "offers come.";

interface Comment
{
    id:number;
    blogid: number;
    user: number;
    content: string;
    publishTime:Date;
    vote: number;
}

interface Blog
{
    id:number;
    user: number;
    content: string;
    publishTime:Date;
    //hotcomment: Comment[];
    vote: number;
}
@Controller('blog')
export class blogController {
  constructor(private readonly appService: AppService) {}

  blogs:Blog[] = [
    {id: 0, user: 0, content:'hello',publishTime:new Date(),vote: 1},
    {id: 1, user: 0, content:'hello',publishTime:new Date(),vote: 2},
    {id: 2, user: 0, content:'hello',publishTime:new Date(),vote: 15}
  ]

  @Get('getBlog/:id')
  getBlog(@Param('id') id:number): Blog {
    //a.hotcomment = 'select * from comment order by vote where id=id limit 5'
    return this.blogs[id];
  } 

  @Post('createBlog')
  createBlog(id:number,content:string, user:number, publishTime:Date, vote:number): Blog{
      //const form = {}
      //this.blogs.push(form);
      const newBlog = {id, content, user, Date,vote}
      this.blogs.push(newBlog);
    return newBlog;
  }

  @Delete('deleteBlog/:id')
  delteBlog(@Param('id') id:number): string{
      this.blogs.forEach(Element => {
        if(this.Element.id = id){
          this.blogs.pop( Element/*怎么根据ID找到该Blog */);
        }
      });
    return "delete success!";
  }

  @Patch('updateBlog/:id')
  updateBlog(@Param('id') id:number, content:string, user:number, publishTime:Date, vote:number): Blog{
    this.blogs.forEach(Element => {
      if(this.Element.id = id){
        Element.content(content);
      }
    })
    return Element;
  }
}