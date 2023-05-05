import { ForbiddenException, Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma/prisma.service';
import { BookmarkDto, CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private readonly prisma: PrismaService) {}

  async createBookmark(userId: number, dto: CreateBookmarkDto) {
    const bookmark = await this.prisma.bookmark.create({
      data: {
        userId,
        ...dto,
      },
    });

    return plainToInstance(BookmarkDto, bookmark);
  }

  async getBookmarks(userId: number) {
    const bookmarks = await this.prisma.bookmark.findMany({
      where: { userId },
    });

    return plainToInstance(BookmarkDto, bookmarks);
  }

  async getBookmarkById(userId: number, bookmarkId: number) {
    const bookmark = await this.prisma.bookmark.findFirst({
      where: {
        id: bookmarkId,
        userId,
      },
    });

    return plainToInstance(BookmarkDto, bookmark);
  }

  async editBookmarkById(
    userId: number,
    bookmarkId: number,
    dto: EditBookmarkDto,
  ) {
    const bookmarkFound = await this.prisma.bookmark.findUnique({
      where: { id: bookmarkId },
    });

    if (!bookmarkFound || bookmarkFound.userId !== userId)
      throw new ForbiddenException('Access to resources denied');

    const bookmark = await this.prisma.bookmark.update({
      where: { id: bookmarkId },
      data: dto,
    });

    return plainToInstance(BookmarkDto, bookmark);
  }

  async deleteBookmarkById(userId: number, bookmarkId: number) {
    const bookmarkFound = await this.prisma.bookmark.findUnique({
      where: { id: bookmarkId },
    });

    if (!bookmarkFound || bookmarkFound.userId !== userId)
      throw new ForbiddenException('Access to resources denied');

    return this.prisma.bookmark.delete({
      where: { id: bookmarkId },
    });
  }
}
