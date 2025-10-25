import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Conectar ao MongoDB
    await client.connect();
    const db = client.db('avila-inc');
    const collection = db.collection('contacts');
    
    // Adicionar timestamp
    const contactData = {
      ...body,
      createdAt: new Date(),
      source: 'avila-inc-website'
    };
    
    // Inserir no banco
    const result = await collection.insertOne(contactData);
    
    return NextResponse.json({
      success: true,
      id: result.insertedId
    });
    
  } catch (error) {
    console.error('Erro ao salvar contato:', error);
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}