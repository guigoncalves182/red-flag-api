import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let jwtService: JwtService;

  beforeEach(() => {
    jwtService = new JwtService({});
    authGuard = new AuthGuard(jwtService);
  });

  const createMockExecutionContext = (
    headers: Record<string, string | undefined>,
  ): ExecutionContext => {
    return {
      switchToHttp: () => ({
        getRequest: (): Request =>
          ({
            headers,
          }) as Request,
      }),
    } as ExecutionContext;
  };

  it('deve permitir a requisição se o token for válido', async () => {
    const mockContext = createMockExecutionContext({
      authorization: 'Bearer valid_token',
    });

    jest.spyOn(jwtService, 'verifyAsync').mockResolvedValue({});

    await expect(authGuard.canActivate(mockContext)).resolves.toBe(true);
  });

  it('deve lançar UnauthorizedException se não houver token', async () => {
    const mockContext = createMockExecutionContext({});

    await expect(authGuard.canActivate(mockContext)).rejects.toThrow(
      UnauthorizedException,
    );
  });

  it('deve lançar UnauthorizedException se o token for inválido', async () => {
    const mockContext = createMockExecutionContext({
      authorization: 'Bearer invalid_token',
    });

    jest
      .spyOn(jwtService, 'verifyAsync')
      .mockRejectedValue(new Error('Invalid token'));

    await expect(authGuard.canActivate(mockContext)).rejects.toThrow(
      UnauthorizedException,
    );
  });

  it('deve retornar undefined se o cabeçalho não for Bearer', () => {
    const request = { headers: { authorization: 'Basic abc123' } } as Request;
    expect(authGuard['extractTokenFromHeader'](request)).toBeUndefined();
  });

  it('deve extrair corretamente o token Bearer', () => {
    const request = { headers: { authorization: 'Bearer mytoken' } } as Request;
    expect(authGuard['extractTokenFromHeader'](request)).toBe('mytoken');
  });
});
