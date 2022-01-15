import { Controller, Get, Post, Param, Session, Body} from '@nestjs/common';
import { AppService } from './app.service';



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
  createBlog(@Session() session:any, @Body('content') content:string): Blog{
      //const form = {}
      //this.blogs.push(form);

      const newBlog = {id:this.blogs.length, content:content, user:1/*session.userId*/, publishTime:new Date(), vote:0}
      this.blogs.push(newBlog);
    return newBlog;
  }

  //@Delete(':id')
  @Post('delete/:id')
  delteBlog(@Param('id') id:number): string{
    const f = this.blogs.findIndex(p=>p.id===id);
    this.blogs.splice(f,1)
    return "delete success!";
  }

  @Post('updateBlog/:id')
  updateBlog(@Param('id') id:number, @Body('content') conten:string): Blog{
    const find = this.blogs.find(element=>element.id === id)
    find.content = conten
    find.publishTime = new Date()
    return find;
  }
}