import { Resolver, Query, Args, Info, Mutation, Subscription } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Measurement } from '../graphql.schema';
import { BatchPayload } from '../prisma/prisma.binding';

import { GqlAuthGuard } from 'src/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from 'src/permissions.guard';
import { Permissions } from '../permissions.decorator';

@Resolver()
export class MeasurementResolver {
    constructor(private readonly prisma: PrismaService) {}

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('measurements')
    @Permissions('emon-server:user')
    async getMeasurements(@Args() args, @Info() info): Promise<Measurement[]> {
        return this.prisma.query.measurements(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Query('measurement')
    @Permissions('emon-server:user')
    async getMeasurement(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.query.measurement(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('createMeasurement')
    @Permissions('emon-server:user')
    async createMeasurement(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.createMeasurement(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateMeasurement')
    @Permissions('emon-server:poweruser')
    async updateMeasurements(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.updateMeasurement(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('updateManyMeasurements')
    @Permissions('emon-server:admin')
    async updateManyMeasurements(@Args() args, @Info() info): Promise<BatchPayload> {
        return this.prisma.mutation.updateManyMeasurements(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteMeasurement')
    @Permissions('emon-server:poweruser')
    async deleteMeasurement(@Args() args, @Info() info): Promise<Measurement> {
        return this.prisma.mutation.deleteMeasurement(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Mutation('deleteManyMeasurements')
    @Permissions('emon-server:admin')
    async deleteManyMeasurements(@Args() args, @Info() info): Promise<BatchPayload> {
        return this.prisma.mutation.deleteManyMeasurements(args, info);
    }

    @UseGuards(GqlAuthGuard, PermissionsGuard)
    @Subscription('measurement')
    @Permissions('emon-server:poweruser')
    async onMeasurementMutation(@Args() args, @Info() info) {        
        return this.prisma.subscription.measurement(args, info);
    }

}
