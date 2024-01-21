import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*NestFactory.create 
  어플리케이션 생성 메서드 
  AppMoudle을 기반으로하는 NestJS 어플리케이션을 생성(어플리케시연 인스턴스 생성)
  과 함께 내부적으로 HTTP서버를 생성하고 지정된 포트로 위 어플리케이션을 연결(기본적으로 express 서버)
  */
  await app.listen(3000);
  // app.liseten 메서드를 이용하여 어플리케이션 구동
}
bootstrap();
