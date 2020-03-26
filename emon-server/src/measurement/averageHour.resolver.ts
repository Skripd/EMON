import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Measurement } from '../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';

import { GqlAuthGuard } from 'src/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from 'src/permissions.guard';
import { Permissions } from '../permissions.decorator';

@Resolver()
export class AverageHourResolver {
    constructor(private readonly prisma: PrismaService) {}

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('averageHours')
    @Permissions('emon-server:user')
    async getAverageHours(@Args() args, @Info() info): Promise<Measurement[]> {
        return this.prisma.query.averageHours(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('averageHour')
    @Permissions('emon-server:user')
    async getAverageHour(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.query.averageHour(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('createAverageHour')
    @Permissions('emon-server:user')
    async createAverageHour(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.createAverageHour(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateAverageHour')
    @Permissions('emon-server:poweruser')
    async updateAverageHour(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.updateAverageHour(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateManyAverageHours')
    @Permissions('emon-server:admin')
    async updateManyAverageHours(@Args() args, @Info() info): Promise<BatchPayload> {
        return this.prisma.mutation.updateManyAverageHours(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteAverageHour')
    @Permissions('emon-server:poweruser')
    async deletAverageHour(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.deleteAverageHour(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteManyAverageHours')
    @Permissions('emon-server:admin')
    async deleteManyAverageHours(@Args() args, @Info() info): Promise<BatchPayload> {
        return this.prisma.mutation.deleteManyAverageHours(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Subscription('averageHour')
    @Permissions('emon-server:poweruser')
    async onAverageHourMutation(@Args() args, @Info() info) {        
        return this.prisma.subscription.averageHour(args, info);
    }

}
