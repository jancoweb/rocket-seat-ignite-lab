import { Content } from "./content"

describe('Notification content', () => {
  it('should be able to create content', () => {
    const content = new Content('Solicitação de amizade recebida')

    expect(content).toBeTruthy();
  });

  it('should not be able to create content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
})

