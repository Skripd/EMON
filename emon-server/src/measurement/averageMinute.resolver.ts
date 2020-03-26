import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Measurement } from '../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';

import { GqlAuthGuard } from 'src/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from 'src/permissions.guard';
import { Permissions } from '../permissions.decorator';

@Resolver()
export class AverageMinuteResolver {
    constructor(private readonly prisma: PrismaService) {}

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('averageMinutes')
    @Permissions('emon-server:user')
    async getAverageMinute(@Args() args, @Info() info): Promise<Measurement[]> {
        return this.prisma.query.averageMinutes(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('averageMinute')
    @Permissions('emon-server:user')
    async getAverageMinutes(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.query.averageMinute(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('createAverageMinute')
    @Permissions('emon-server:user')
    async createAverageMinute(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.createAverageMinute(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateAverageMinute')
    @Permissions('emon-server:poweruser')
    async updateAverageMinute(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.updateAverageMinute(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateManyAverageMinutes')
    @Permissions('emon-server:admin')
    async updateManyAverageMinutes(@Args() args, @Info() info): Promise<BatchPayload> {
        return this.prisma.mutation.updateManyAverageMinutes(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteAverageMinute')
    @Permissions('emon-server:poweruser')
    async deletAverageMinute(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.deleteAverageMinute(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteManyAverageMinutes')
    @Permissions('emon-server:admin')
    async deleteManyAverageMinutes(@Args() args, @Info() info): Promise<BatchPayload> {
        return this.prisma.mutation.deleteManyAverageMinutes(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Subscription('averageMinute')
    @Permissions('emon-server:poweruser')
    async onAverageMinuteMutation(@Args() args, @Info() info) {        
        return this.prisma.subscription.averageMinute(args, info);
    }

}
