import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Measurement } from '../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';

import { GqlAuthGuard } from 'src/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from 'src/permissions.guard';
import { Permissions } from '../permissions.decorator';

@Resolver()
export class AverageDayResolver {
    constructor(private readonly prisma: PrismaService) {}

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('averageDays')
    @Permissions('emon-server:user')
    async getAverageDay(@Args() args, @Info() info): Promise<Measurement[]> {
        return this.prisma.query.averageDays(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('averageDay')
    @Permissions('emon-server:user')
    async getAverageDays(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.query.averageDay(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('createAverageDay')
    @Permissions('emon-server:user')
    async createAverageDay(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.createAverageDay(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateAverageDay')
    @Permissions('emon-server:poweruser')
    async updateAverageDay(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.updateAverageDay(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateManyAverageDays')
    @Permissions('emon-server:admin')
    async updateManyAverageDays(@Args() args, @Info() info): Promise<BatchPayload> {
        return this.prisma.mutation.updateManyAverageDays(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteAverageDay')
    @Permissions('emon-server:poweruser')
    async deletAverageDay(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.deleteAverageDay(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteManyAverageDays')
    @Permissions('emon-server:admin')
    async deleteManyAverageDays(@Args() args, @Info() info): Promise<BatchPayload> {
        return this.prisma.mutation.deleteManyAverageDays(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Subscription('averageDay')
    @Permissions('emon-server:poweruser')
    async onAverageDayMutation(@Args() args, @Info() info) {        
        return this.prisma.subscription.averageDay(args, info);
    }

}
