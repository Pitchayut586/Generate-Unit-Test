import { GoogleGenerativeAI } from '@google/generative-ai';

export const GenAi = async (): Promise<any> => {
    const genAI = await new GoogleGenerativeAI('AIzaSyAQmy9kolEloEfsOYW5MvczAmlwS8el9N8');

    return genAI;
};

export const germiniPrompt = {
    history: [
        {
            role: 'user',
            parts: `
            import { Prisma, TenantAuth } from '@prisma/client';
            import Joi from 'joi';
            import { Request, Response } from 'express';
            import { createPaginator } from 'prisma-pagination';
            import prisma from '../utils/Helper';
            
            
            const getTenant = async (req: any, res: any) => {
                const query: any = req.query;
                const perPage = query.size ? parseInt(query.size) : 10;
                
                const paginate = createPaginator({ perPage: perPage });
            
                const data = await paginate<TenantAuth, Prisma.TenantAuthFindManyArgs>(
                    prisma.tenantAuth,
                    {
                        orderBy: {
                            CreatedAt: 'asc',
                        },
                    },
                    { page: query.page ?? 1 },
                );
            
                return res.json(data);
            };
            
            const getTenantFromEmail = async (req: any, res: any) => {
                const query = req.query
                const schema = Joi.object({
                    Email: Joi.string().email().required(),
                });
            
                const { error } = schema.validate(query);
            
                if (error) {
                    return res.status(422).json({
                        status: 422,
                        message: 'Unprocessable Entity',
                        data: error.details,
                    });
                }
                const email = query.Email
                const spiltEmail = email.split('@') ?? []
                const domain = spiltEmail[1] ?? null
            
                if (domain === null) {
                    return res.status(422).json({
                        status: 422,
                        message: 'Please fill in your email completely.'
                    })
                }
            
                const findDomain = await prisma.tenantAuth.findFirst({
                    where:{
                        DomainName: domain
                    }
                })
            
                if (findDomain === null || findDomain === undefined) {
                    return res.status(422).json({
                        status: 422,
                        message: 'Domain not found in database'
                    })
                }
            
                return res.json(findDomain)
            };
            
            const createTenant = async (req: any, res: Response) => {
                const body = req.body;
            
                const schema = Joi.object({
                    DomainName: Joi.string().min(1).max(255).required(),
                    ClientID: Joi.string().min(1).max(255).required(),
                    ClientSecret: Joi.string().min(1).max(255).required(),
                    TenantID: Joi.string().min(1).max(255).required(),
            
                });
            
                const { error } = schema.validate(body);
            
                if (error) {
                    return res.status(422).json({
                        status: 422,
                        message: 'Unprocessable Entity',
                        data: error.details,
                    });
                }
            
                const duplicate = await prisma.tenantAuth.findFirst({
                    where: {
                        DomainName: body.DomainName,
                    },
                });
            
                if (duplicate) {
                    return res.status(422).json({
                        status: 422,
                        message: 'Domain name is duplicate in database',
                    });
                }
                
                const payload: any = {
                    DomainName: body.DomainName,
                    ClientID: body.ClientID,
                    ClientSecret: body.ClientSecret,
                    TenantID: body.TenantID,
                };
            
                const tenant = await prisma.tenantAuth.create({
                    data: payload,
                });
            
                return res.json(tenant);
            };
            
            const updateTenant = async (req: any, res: Response) => {
                const body = req.body;
            
                const schema = Joi.object({
                    TenantAuthID: Joi.string().uuid().required(),
                    DomainName: Joi.string().max(255),
                    ClientID: Joi.string().max(255),
                    ClientSecret: Joi.string().max(255),
                    TenantID: Joi.string().max(255),
                });
            
                const { error } = schema.validate(body);
            
                if (error) {
                    return res.status(422).json({
                        status: 422,
                        message: 'Unprocessable Entity',
                        data: error.details,
                    });
                }
            
                const payload: any = {}
            
                const identifierTenant = await prisma.tenantAuth.findFirst({
                    where: {
                        TenantAuthID: body.TenantAuthID,
                    },
                });
            
                if (identifierTenant === null || identifierTenant === undefined) {
                    return res.status(422).json({
                        status : 422,
                        message : 'Tenant not found'
                    })
                }
            
                if (body.DomainName) {
                    const duplicate = await prisma.tenantAuth.findFirst({
                        where: {
                            DomainName: body.DomainName,
                        },
                    });
                    if (duplicate) {
                        return res.status(422).json({
                            status: 422,
                            message: 'Domain name is duplicate in database',
                        });
                    }
            
                    payload['DomainName'] = body.DomainName
            
                }
            
                if (body.ClientID) {
                    payload['ClientID'] = body.ClientID
                }
            
                if (body.ClientSecret) {
                    payload['ClientSecret'] = body.ClientSecret
                }
            
                if (body.TenantID) {
                    payload['TenantID'] = body.TenantID
                }
            
                const update = await prisma.tenantAuth.update({
                    where: {
                        TenantAuthID: body.TenantAuthID,
                    },
                    data: payload,
                });
            
                return res.json(update);
            };
            
            const deleteTenant = async (req: Request, res: Response) => {
                const query: any = req.query;
            
                const schema = Joi.object({
                    TenantAuthID: Joi.string().uuid().required(),
                });
            
                const { error } = schema.validate(query);
            
                if (error) {
                    return res.status(422).json({
                        status: 422,
                        message: 'Unprocessable Entity',
                        data: error.details,
                    });
                }
            
                const identifierTenant = await prisma.tenantAuth.findFirst({
                    where: {
                        TenantAuthID: query.TenantAuthID,
                    },
                });
            
                if (identifierTenant === null || identifierTenant === undefined) {
                    return res.status(422).json({
                        status: 422,
                        message : "Tenant not found"
                    })
                }
            
                await prisma.tenantAuth.delete({
                    where: {
                        TenantAuthID: query.TenantAuthID,
                    },
                });
            
                return res.json({
                    status: 200,
                    message: 'OK',
                });
            };
            
            export { getTenant, createTenant, updateTenant, deleteTenant, getTenantFromEmail }
            
            จากโค้ดช่วย เขียน unit tets ให้หน่อยตอบตามรูปเเบบดาต้าที่เทรนให้`,
        },
        {
            role: 'model',
            parts: `
            import app from '../src/app';
            import { beforeAll, describe, test, expect } from '@jest/globals';
            import request from 'supertest';
            import prisma from '../utils/Helper';
            
            let adminToken = ''; // Assume adminToken is retrieved and set here
            
            describe('TenantAuth Tests', () => {
                beforeAll(async () => {
                    // Perform any setup tasks, such as getting an admin token
                    adminToken = await getAdminToken(); // Replace with actual token retrieval function
                });
            
                describe('getTenant Tests', () => {
                    test('Successfully get tenants with default pagination', async () => {
                        await request(app)
                            .get('/tenant/get')
                            .set('Authorization', Bearer adminToken)
                            .expect(200)
                            .then((response) => {
                                expect(response.body).toHaveProperty('data');
                                expect(response.body.data.length).toBeLessThanOrEqual(10); // default perPage is 10
                            });
                    });
            
                    test('Successfully get tenants with custom pagination', async () => {
                        await request(app)
                            .get('/tenant/get')
                            .query({ size: 5, page: 2 })
                            .set('Authorization', Bearer adminToken)
                            .expect(200)
                            .then((response) => {
                                expect(response.body).toHaveProperty('data');
                                expect(response.body.data.length).toBeLessThanOrEqual(5);
                            });
                    });
                });
            
                describe('getTenantFromEmail Tests', () => {
                    test('Get tenant by valid email', async () => {
                        await request(app)
                            .get('/tenant/getFromEmail')
                            .query({ Email: 'valid@example.com' })
                            .set('Authorization', Bearer adminToken)
                            .expect(200)
                            .then((response) => {
                                expect(response.body).toHaveProperty('DomainName');
                            });
                    });
            
                    test('Fail to get tenant by invalid email', async () => {
                        await request(app)
                            .get('/tenant/getFromEmail')
                            .query({ Email: 'invalidemail' })
                            .set('Authorization', Bearer adminToken)
                            .expect(422);
                    });
                });
            
                describe('createTenant Tests', () => {
                    test('Successfully create a tenant', async () => {
                        const newTenant = {
                            DomainName: 'newtenant.com',
                            ClientID: 'newClientID',
                            ClientSecret: 'newClientSecret',
                            TenantID: 'newTenantID',
                        };
                        await request(app)
                            .post('/tenant/create')
                            .send(newTenant)
                            .set('Authorization', Bearer adminToken)
                            .expect(200);
                    });
            
                    test('Fail to create a tenant with duplicate domain', async () => {
                        const duplicateTenant = {
                            DomainName: 'existingdomain.com', // Assume this domain already exists
                            ClientID: 'newClientID',
                            ClientSecret: 'newClientSecret',
                            TenantID: 'newTenantID',
                        };
                        await request(app)
                            .post('/tenant/create')
                            .send(duplicateTenant)
                            .set('Authorization', Bearer adminToken)
                            .expect(422);
                    });
                });
            
                describe('updateTenant Tests', () => {
                    test('Successfully update a tenant', async () => {
                        const updateData = {
                            TenantAuthID: 'validUUID', // Replace with a valid UUID
                            DomainName: 'updateddomain.com',
                        };
                        await request(app)
                            .patch('/tenant/update')
                            .send(updateData)
                            .set('Authorization', Bearer adminToken)
                            .expect(200);
                    });
            
                    test('Fail to update a non-existing tenant', async () => {
                        const invalidUpdateData = {
                            TenantAuthID: 'nonExistingUUID', // Replace with an invalid UUID
                            DomainName: 'nonexistingdomain.com',
                        };
                        await request(app)
                            .patch('/tenant/update')
                            .send(invalidUpdateData)
                            .set('Authorization', Bearer adminToken)
                            .expect(422);
                    });
                });
            
                describe('deleteTenant Tests', () => {
                    test('Successfully delete a tenant', async () => {
                        await request(app)
                            .delete('/tenant/delete')
                            .query({ TenantAuthID: 'validUUID' }) // Replace with a valid UUID
                            .set('Authorization', Bearer adminToken)
                            .expect(200);
                    });
            
                    test('Fail to delete a non-existing tenant', async () => {
                        await request(app)
                            .delete('/tenant/delete')
                            .query({ TenantAuthID: 'nonExistingUUID' }) // Replace with an invalid UUID
                            .set('Authorization', Bearer adminToken)
                            .expect(422);
                    });
                });
            });
            `,
        },
    ],
};
