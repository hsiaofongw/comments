import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { IComment } from '../interfaces/comment.interface';
import * as md5 from 'crypto-js/md5';
import * as Hex from 'crypto-js/enc-hex';

export interface Response<T> {
    data: T;
}

@Injectable()
export class TransformInterceptor implements NestInterceptor {

    md5Digest(s: string): string {
        return Hex.stringify(md5(s));
    }

    gravatar(email: string) {
        return `https://www.gravatar.com/avatar/${this.md5Digest(email)}`;
    }

    /**
     * 将邮箱转换为 gravatar 地址，并且将邮箱地址抹去
     * @param d 评论数组
     */
    transform(d: IComment[]) {

        for (let item of d) {
            item.from.avatar = this.gravatar(item.from.email);
            item.from.email = "";

            if (! item.approved) {
                item.says = "评论正等待后台确认……";
            }
        }

        return d;
    }

    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(map(data => this.transform(data) ));
    }
}
