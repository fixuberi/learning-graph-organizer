import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: [join(process.cwd(),'libs/graph-ql/src/lib/schema.graphql')],
      definitions: {
        path: join(process.cwd(),'libs/graph-ql/src/lib/graphql.types.ts'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService,
  ],
})
export class AppModule {}
